var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    
    }
};

var game = new Phaser.Game(config);

var tortuga;
var baiacu;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');
    this.load.image('baiacu', 'assets/peixes/baiacu.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    
    this.add.image(400, 525, 'logo').setScale(0.5);

    tortuga = this.add.image(400, 300, 'tartaruga')
    tortuga.setFlip(true, false);

    peixe = this.add.image(400,300, 'baiacu')
    peixe.setFlip(true, false);

}

function update() { 
    tortuga.x = (this.input.x + 100);
    tortuga.y = (this.input.y + 100);
    
    peixe.x = (this.input.x - 100);
    peixe.y = (this.input.y - 100);
}