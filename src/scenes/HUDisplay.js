let date;

class HUDisplay extends Phaser.Scene {
    
    constructor() {
        super('HUDisplay');
    }

    create() {
        date = this.add.text(790, 10, '', { fill: '#2dff00' }).setOrigin(1, 0);
    }
    
    update() {
        let d = new Date();
        date.setText(`${d.toDateString()} ${d.toLocaleTimeString()}`);
    }
}

export default HUDisplay;