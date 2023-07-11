import Phaser from "../lib/phaser.js";


export default class GameOver extends Phaser.Scene {
    constructor() {
        super('game-over')
    }

    preload() {
        this.load.image('background', 'assets/bg_layer1.png')
    }


    create() {
        this.background = this.add.image(0, 0, 'background')

        const width = this.scale.width
        const height = this.scale.height

        this.add.text(width * .5, height * .5, "Game Over", {
            fontSize: 48
        }).setOrigin(0.5)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('game')
        })
    }
}