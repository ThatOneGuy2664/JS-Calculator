import { Main } from './scenes/Main.js';

const config = {
    type: Phaser.AUTO,
    title: 'JavaScript Calculator',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#FFFFFF',
    pixelArt: false,
    scene: [
        Main
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);