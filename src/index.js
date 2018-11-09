import './style.css';
import Boot from './scenes/Boot'
import Game from './scenes/Game'
import HUDisplay from './scenes/HUDisplay'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameContainer',
    backgroundColor: '#222222',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [
        Boot,
        Game,
        HUDisplay
    ]
};

const game = new Phaser.Game(config);