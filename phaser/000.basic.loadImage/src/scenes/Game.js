import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {

    clickCounter = 0

    /** @type {Phaser.GameObjects.Text} */
    clickCounterText

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    /** @type {Phaser.Physics.Arcade.Sprite} */
    einstein

    constructor() {
        super('game')
    }

    preload() {
        this.load.image('einstein', 'assets/ra_einstein.png')

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        console.log(this.cameras.main.worldView.x)
        console.log(this.cameras.main.worldView.y)

        this.einstein = this.physics.add.sprite(this.game.config.width / 2,
            this.game.config.height / 2, 'einstein')
            .setInteractive()
            .setScale(.25)
        // einstein.on('pointerdown', function () {
        //     console.log('clicked!')
        //     this.clickCounter++
        //     this.clickCounterText.text = `Click: ${this.clickCounter}`
        // }.bind(this))

        this.einstein.on('pointerdown', () => {
            this.clickCounter++
            this.clickCounterText.text = `Click: ${this.clickCounter}`
        })

        const style = { color: "#ee0", fontSize: 32 }
        this.clickCounterText = this.add.text(
            320, 10, `Click: ${this.clickCounter}`, style)
            .setOrigin(.5, 0)


        // this.tweens.create({
        //         targets: this.einstein,
        //         x: 600,
        //         y: 600,
        //         duration: 5000,
        //         ease: 'Power2',
        //         yoyo: true,
        //         repeat: -1
        //     }).play();
    }

    update() {

        // 控制sprite的移动
        if (this.cursors.left.isDown) {
            this.einstein.setVelocityX(-200)
            // this.logSpritePosition(this.einstein)
        } else if (this.cursors.right.isDown) {
            this.einstein.setVelocityX(200)
            // this.logSpritePosition(this.einstein)
        } else if (this.cursors.up.isDown) {
            this.einstein.setVelocityY(-200)
            // this.logSpritePosition(this.einstein)
        } else if (this.cursors.down.isDown) {
            this.einstein.setVelocityY(200)
            //  this.logSpritePosition(this.einstein)
        } else {
            // this.einstein.setVelocityX(0)
            // this.einstein.setVelocityY(0)
            // this.logSpritePosition(this.einstein)
        }

        this.collideWithGameArea(this.einstein)
        this.followPointer(this.einstein)
    }

    /** 
     * @param {Phaser.Physics.Arcade.Sprite} sprite
     */
    logSpritePosition(sprite) {
        console.log(`x: ${sprite.x}`)
        console.log(`y: ${sprite.y}`)
        console.log(`width: ${sprite.displayWidth}`)
        console.log(`height: ${sprite.displayHeight}`)
    }

    /** 
     * @param {Phaser.Physics.Arcade.Sprite} sprite
     */
    collideWithGameArea(sprite) {
        if (sprite.x - sprite.displayWidth / 2 <= 0) {
            sprite.setVelocityX(200)
        }
        if (sprite.x + sprite.displayWidth /2 >= this.game.config.width) {
            sprite.setVelocityX(-200)
        }
        if (sprite.y - sprite.displayHeight / 2 <= 0) {
            sprite.setVelocityY(200)
        }
        if (sprite.y + sprite.displayHeight / 2 >= this.game.config.height) {
            sprite.setVelocityY(-200)
        }
    }

    /** 
     * @param {Phaser.Physics.Arcade.Sprite} sprite
     */
    followPointer(sprite) {
        this.input.on('pointermove', (pointer) => {
            // 计算Sprite对象的位置
            const angle = Phaser.Math.Angle.Between(sprite.x, sprite.y, pointer.x, pointer.y);
            const distance = Phaser.Math.Distance.Between(sprite.x, sprite.y, pointer.x, pointer.y);
            const speed = 5000; // 设置速度
            const dx = Math.cos(angle) * distance / speed;
            const dy = Math.sin(angle) * distance / speed;
            sprite.x += dx;
            sprite.y += dy;
        });
        
    }
}
