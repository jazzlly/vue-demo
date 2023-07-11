import Phaser from "../lib/phaser.js";
import Carrot from "./Carrot.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    platforms

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    /** @type {Phaser.GameObjects.Image} */
    background

    /** @type {Phaser.Physics.Arcade.Group} */
    carrots

    carrotsCollected = 0

    /** @type {Phaser.GameObjects.Text} */
    carrotsCollectedText

    // called before preload to init status
    init() {
        this.carrotsCollected = 0
    }

    preload() {
        // called to allow us to specify images, audio, or other assets to load before starting the Scene.
        this.load.image('background', 'assets/bg_layer1.png')
        this.load.image('platform', 'assets/ground_grass.png')
        this.load.image('bunny-stand', 'assets/bunny1_stand.png')
        this.load.image('bunny-jump', 'assets/bunny1_jump.png')
        this.load.image('carrot', 'assets/carrot.png')

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        // called once all the assets for the Scene have been loaded.
        console.log('game create ...')
        // this.add.image(240, 320, 'background')
        this.background = this.add.image(0, 0, 'background')

        this.platforms = this.physics.add.staticGroup()
        for (let i = 0; i < 5; ++i) {
            const x = Phaser.Math.Between(100, 350)
            const y = 150 * i

            const platform = this.platforms.create(x, y, 'platform')
            platform.scale = .5

            const body = platform.body
            body.updateFromGameObject()
        }

        this.player = this.physics.add.sprite(240, 320, 'bunny-stand').setScale(.5)
        this.player.body.checkCollision.up = false
        this.player.body.checkCollision.left = false
        this.player.body.checkCollision.right = false

        // const carrot = new Carrot(this, 240, 320, 'carrot')
        // this.add.existing(carrot)
        this.carrots = this.physics.add.group({
            classType: Carrot
        })
        // this.carrots.get(240, 320, 'carrot')

        this.physics.add.collider(this.platforms, this.carrots)
        this.physics.add.collider(this.platforms, this.player)

        this.physics.add.overlap(
            this.player,
            this.carrots,
            this.handleCollectCarrot,
            undefined,
            this
        )

        this.cameras.main.startFollow(this.player)

        this.cameras.main.setDeadzone(this.scale.width * 1.5)

        const style = {color: "#000", fontSize: 24}
        this.carrotsCollectedText =  this.add.text(
            240, 10, 'Carrots: 0', style)
            .setScrollFactor(0)
            .setOrigin(0.5, 0)
    }

    update() {
        const bottomPlatform = this.findBottomMostPlatform()
        if (this.player.y > bottomPlatform.y + 200) {
            console.log("game over")
            this.scene.start('game-over')
        }

        // 相机的y坐标位置
        const scrollY = this.cameras.main.scrollY

        this.platforms.children.iterate(child => {

            /** @type {Phaser.Physics.Arcade.Sprite} */
            const platform = child

            /* Phaser 3框架中的默认坐标原点（0,0）位于浏览器窗口的左上角。
                x轴的正方向是向右延伸，y轴的正方向是向下延伸。
                这种坐标系通常被称为“左上角坐标系”或“笛卡尔坐标系”。

                camera是可视区域的一个窗口，.main.scrollY属性是指主摄像机在y轴上的滚动偏移量。
                兔子不断向上跳时，camera不断向上移动。.main.scrollY会不断减小。
                
                这时，原点（左上角）和所有游戏对象(platform)的相对位置都没有发生变化。
                所以, 如果没有程序代码操作，platform.y是不会变化的。
            */

            // console.log(`camera main.scrollY: ${scrollY}`)
            // console.log(`platform.y: ${platform.y}`)
            if (platform.y >= scrollY + 700) {
                platform.y = scrollY - Phaser.Math.Between(50, 100)
                platform.body.updateFromGameObject()

                // create a carrot above the platform
                this.addCarrotAbove(platform)
            }
        })

        // 背景图随着相机移动
        if (this.background.y > scrollY + 1000) {
            this.background.y = scrollY
        }

        const touchingDown = this.player.body.touching.down
        if (touchingDown) {
            this.player.setVelocityY(-300)  // 接触到平台的时候，兔子跳一下
            this.player.setTexture('bunny-jump')
        }

        const vy = this.player.body.velocity.y
        if (vy > 0 && this.player.texture.key !== 'bunny-stand') {
            this.player.setTexture('bunny-stand')
        }

        // 处理键盘左右键，控制兔子的移动
        if (this.cursors.left.isDown && !touchingDown) {
            this.player.setVelocityX(-200)
        } else if (this.cursors.right.isDown && !touchingDown) {
            this.player.setVelocityX(200)
        } else {
            this.player.setVelocityX(0)
        }

        this.horizontalWrap(this.player)
    }

    /**
     * @param {Phaser.GameObjects.Sprite} sprite
     */
    horizontalWrap(sprite) {
        const halfWidth = sprite.displayWidth * .5
        const gameWidth = this.scale.width
        if (sprite.x < - halfWidth) {
            sprite.x = gameWidth + halfWidth
        } else if (sprite.x > gameWidth + halfWidth) {
            sprite.x = - halfWidth
        }
    }

    /**
     * @param {Phaser.GameObjects.Sprite} sprite
     */
    addCarrotAbove(sprite) {
        // todo: if there is a carrot in the platform, just display and enable it?
        const y = sprite.y - sprite.displayHeight

        /** @type {Phaser.Physics.Arcade.Sprite} */
        const carrot = this.carrots.get(sprite.x, y, 'carrot') // fixme: reuse carrot?
        carrot.setActive(true)
        carrot.setVisible(true)
        this.add.existing(carrot)

        carrot.body.setSize(carrot.width, carrot.height)

        this.physics.world.enable(carrot)
        return carrot
    }

    /**
     * @param {Phaser.Physics.Arcade.Sprite} player
     * @param {Carrot} carrot
     */
    handleCollectCarrot(player, carrot) {                
        // hide from display
        this.carrots.killAndHide(carrot)

        // disable from physics world
        this.physics.world.disableBody(carrot.body)

        this.carrotsCollected++
        this.carrotsCollectedText.text = `Carrots: ${this.carrotsCollected}`
    }

    findBottomMostPlatform() {
        const platforms = this.platforms.getChildren()
        let bottomPlatform = platforms[0]

        for (let i = 0; i < platforms.length; i++) {
            const platform = platforms[i];
            if (platform.y > bottomPlatform.y) {
                bottomPlatform = platform
            }
        }
        
        return bottomPlatform
    }
}

