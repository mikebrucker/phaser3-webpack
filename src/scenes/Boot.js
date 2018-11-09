import Logo from '../assets/images/phaser-logo.png';

class Boot extends Phaser.Scene {
    
    constructor() {
        super({ key: 'Boot', active: true });
    }

    preload() {
        let progressBox = this.add.graphics(),
        progressBar = this.add.graphics(),
        loadText = this.add.text(400, 300, 'Loading... 0%', { fontSize: '24px', fill: 'white', fontFamily: 'Monaco, monospace', stroke: 'black', strokeThickness: 2 }).setOrigin(0.5),
        assetText = this.add.text(400, 400, 'Loading... ', { fontSize: '24px', fill: 'white', fontFamily: 'Monaco, monospace', stroke: 'black', strokeThickness: 2 }).setOrigin(0.5);
        progressBox.fillStyle(0x444444).fillRect(50, 250, 700, 100);
        
        this.load.on('progress', function(value) {
            progressBar.clear();
            progressBar.fillStyle(0xdc143c, 1);
            progressBar.fillRect(75, 275, 650 * value, 50);
            loadText.setText(`Loading... ${Math.round(value * 100)}%`);
        }, this);
        
        this.load.on('fileprogress', function(file) {
            assetText.setText(`Loading.... ${file.key}`);
        });

        this.load.on('complete', function() {
            this.scene.start('Game');
        }, this);

        this.load.image('phaser_logo', Logo);
    }

    create() {
    }
}

export default Boot;