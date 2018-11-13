class Game extends Phaser.Scene {
    
    constructor() {
        super('Game');
    }

    create() {
        let logo = this.physics.add.sprite(400, 300, 'phaser_logo');
        logo.setCollideWorldBounds(true)
            .setBounce(1)
            .setVelocity(80, 80);
    }
}

export default Game;