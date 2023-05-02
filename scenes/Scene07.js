//KLAUS VAI PARA O QUARTO REPENSAR SUAS ATITUDES
//CENÁRIO: quartoKlaus 

class Scene07 extends SimpleScene {
  constructor() {
    super("Scene07");
    this.usar = 0;
  }

  init() {
    this.physics.world.setBounds(30, 80, 540, 310);
  }

  preload() {
    this.load.image("cenario7", "assets/cenarios/quartoKlaus.png");
    this.load.imageset("Klaus7", "assets/personagens/klausJovem.png", 40, 70);

    //CAIXAS DE TEXTO..........
    this.load.image("fala17", "assets/caixasTexto/falas/Scene7/fala1.png");
    this.load.image("fala27", "assets/caixasTexto/falas/Scene7/fala2.png");
    this.load.image("fala37", "assets/caixasTexto/falas/Scene7/fala3.png");

  }

  create() {
    this.cenario = this.add.image(300, 200, "cenario7");
    this.jogador = this.add.sprite(50, 150, "Klaus7", 4);
    this.jogador.enablePhysics();
    this.jogador.setCollideWorldBounds(true);
    //
    //
    //FALAS..........
    this.fala17 = this.add.image(300, 330, "fala17");
    this.fala27 = this.add.image(300, 330, "fala27");
    this.fala27.setVisible(false);
    this.fala37 = this.add.image(300, 330, "fala37");
    this.fala37.setVisible(false);
    //
    //
    //LIMITAÇÕES 1/2..........
    this.cama = this.add.rectangle(415, 100, 120, 100, 0xFF00FF);
    this.cama.setVisible(false);

    this.mesa = this.add.rectangle(140, 320, 200, 135, 0xff00ff);
    this.mesa.setVisible(false);
    //
    //
    //CAMERA DO JOGADOR..........
    /*this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.jogador);
    this.cameras.main.roundPixels = true;*/
    //
    //
    //
    this.anims.create("andarDireita7", "Klaus7", 5, 7, 10);
    this.anims.create("andarEsquerda7", "Klaus7", 0, 2, 10);
    this.anims.create("frente7", "Klaus7", 3);
    this.anims.create("costas7", "Klaus7", 4);
    //this.drawGrid();
    //
    //
    //
    this.teclaEspaco = this.add.key("SPACE");
    this.rightKey = this.add.key("RIGHT");
    this.leftKey = this.add.key("LEFT");
    this.downKey = this.add.key("DOWN");
    this.upKey = this.add.key("UP");
    this.teclaW = this.add.key("W");
    this.teclaA = this.add.key("A");
    this.teclaS = this.add.key("S");
    this.teclaD = this.add.key("D");

    this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene08");
    }

    let x = this.jogador.x;
    let y = this.jogador.y;

    let anim7 = "frente7";
    //
    if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
      this.jogador.x += 3;
      anim7 = "andarDireita7";
    }
    if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
      this.jogador.x -= 3;
      anim7 = "andarEsquerda7";
    }
    if (this.downKey.isPressed() || this.teclaS.isPressed()) {
      this.jogador.y += 3;
      anim7 = "frente7";
    }
    if (this.upKey.isPressed() || this.teclaW.isPressed()) {
      this.jogador.y -= 3;
      anim7 = "costas7";
    }
    if (this.jogador.intersects(this.cama)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }

    if (this.jogador.intersects(this.cama)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    if (this.jogador.intersects(this.mesa)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }

    if (this.teclaEspaco.wasPressed()) {
      this.usar += 1;
    }

    switch (this.usar) {
      case 1:
        this.fala17.setVisible(false);
        this.fala27.setVisible(true);
        break;

      case 2:
        this.fala27.setVisible(false);
        this.fala37.setVisible(true);
        break;

      case 3:
        this.fala37.setVisible(false);
        this.scene.start("Scene08");
        break;
    }

    if (this.usar > 3) {
      this.scene.start("Scene08");
    }

    this.jogador.play(anim7, true);

  }
}