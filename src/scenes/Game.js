class Game extends Phaser.Scene {
    
    constructor() {
        super('Game');
    }

    create() {
        this.add.image(400, 300, 'phaser_logo');
    }
}

export default Game;