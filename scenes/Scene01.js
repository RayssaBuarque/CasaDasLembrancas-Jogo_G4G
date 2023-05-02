//ESSA É A TELA INICIAL DO GAME

class Scene01 extends SimpleScene {
  constructor() {
    super("Scene01");
  }

  init() {

  }

  preload() {
    this.load.image("ruaOng", "assets/cenarios/ruaOngIntro.png");
    this.load.image("jogar", "assets/botoes/jogar.png");
    this.load.image("irOng", "assets/botoes/irOng.png");
    
  }

  create() {
    //HITBOXES..........
    this.ongSite = this.add.rectangle(300, 275, 225, 50, 0xff681d);
    this.ongSite.enableClick();

    this.comecar = this.add.rectangle(300, 200, 225, 75, 0xFFDEAD);
    this.comecar.enableClick();

    //CENARIO..........
    this.ruaOng = this.add.image(300, 200, "ruaOng");

    //BOTÕES..........
    this.jogar = this.add.image(300, 200, "jogar");
    this.irOng = this.add.image(300, 275, "irOng");
    this.drawGrid;

    this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene02");
    }

    if (this.comecar.wasClicked()) {
      this.scene.start("Scene02");
    }

    if (this.ongSite.wasClicked()) {

      window.open("https://casadozezinho.org.br/'", "minhaJanela");
    }
  }
}