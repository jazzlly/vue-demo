import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'

console.log('Hello, World!')


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 640,
    height: 640,
    backgroundColor: '#aaeeaa',
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: {
            //     y: 200
            // },
            debug: true
        }
    }
})