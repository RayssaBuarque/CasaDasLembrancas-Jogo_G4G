//FIM DO FLASHBACK

class Scene11 extends SimpleScene {
  constructor() {
    super("Scene11");
    this.usar = 1;
    this.trava = false;
  }

  init() {
    this.physics.world.setBounds(50, 50, 500, 200);

  }

  preload() {
    //CENÁRIO..........
    this.load.image("quartoMudanca", "assets/cenarios/quartoMudanca.png");

    //PERSONAGENS..........
    this.load.image("mae", "assets/personagens/maeKlaus.png");
    this.load.imageset("Klaus11", "assets/personagens/klausAdulto.png", 45, 100);

    //FALAS...............
    this.load.image("fala111", "assets/caixasTexto/falas/Scene11/fala1.png");
    this.load.image("fala211", "assets/caixasTexto/falas/Scene11/fala2.png");
    this.load.image("fala311", "assets/caixasTexto/falas/Scene11/fala3.png");
    this.load.image("fala411", "assets/caixasTexto/falas/Scene11/fala4.png");
    this.load.image("fala511", "assets/caixasTexto/falas/Scene11/fala5.png");
    this.load.image("fala611", "assets/caixasTexto/falas/Scene11/fala6.png");

  }

  create() {
    //CENARIO..........
    this.fundo = this.add.image(300, 200, "quartoMudanca");
    //this.drawGrid;
    this.mae = this.add.image(400, 400, "mae");
    this.mae.setVisible(true);
    this.jogador1 = this.add.sprite(250, 200, "Klaus1", 5);
    this.jogador1.enablePhysics();
    this.jogador1.setCollideWorldBounds(true);

    this.fala111 = this.add.image(300, 330, "fala111");
    this.fala111.setVisible(false);
    this.fala211 = this.add.image(300, 330, "fala211");
    this.fala211.setVisible(false);
    this.fala311 = this.add.image(300, 330, "fala311");
    this.fala311.setVisible(false);
    this.fala411 = this.add.image(300, 330, "fala411");
    this.fala411.setVisible(false);
    this.fala511 = this.add.image(300, 330, "fala511");
    this.fala511.setVisible(false);
    this.fala611 = this.add.image(300, 330, "fala611");
    this.fala611.setVisible(false);

    //
    //LIMITES DE ESPAÇO..........
    this.cama = this.add.rectangle(406, 100, 110, 50, 0xFF00FF);
    this.cama.setVisible(false);

    this.mesa = this.add.rectangle(140, 320, 200, 135, 0xff00ff);
    this.mesa.setVisible(false);

    this.caixasEsquerda = this.add.rectangle(260, 100, 96, 20, 0xffffff);
    this.caixasEsquerda.setVisible(false);

    this.caixasDireita = this.add.rectangle(500, 100, 95, 100, 0xffffff);
    this.caixasDireita.setVisible(false);

    this.banquinho = this.add.rectangle(50, 180, 40, 40, 0xffffff);
    this.banquinho.setVisible(false);

    //ANIMAÇÕES DOS PERSONAGENS
    this.anims.create("andarDireita", "Klaus11", 5, 7, 10);
    this.anims.create("andarEsquerda", "Klaus11", 0, 2, 10);
    this.anims.create("frente", "Klaus11", 3);
    this.anims.create("costas", "Klaus11", 4);

    this.rightKey = this.add.key("RIGHT");
    this.leftKey = this.add.key("LEFT");
    this.downKey = this.add.key("DOWN");
    this.upKey = this.add.key("UP");
    this.teclaW = this.add.key("W");
    this.teclaA = this.add.key("A");
    this.teclaS = this.add.key("S");
    this.teclaD = this.add.key("D");
    this.teclaEspaco = this.add.key("SPACE");

    this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene12");
    }

    let x = this.jogador1.x;
    let y = this.jogador1.y;

    let anim = "frente";
    //
    if (this.trava == false) {
      if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
        this.jogador1.x += 3;
        anim = "andarDireita";
      }
      if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
        this.jogador1.x -= 3;
        anim = "andarEsquerda";
      }
      if (this.downKey.isPressed() || this.teclaS.isPressed()) {
        this.jogador1.y += 3;
        anim = "frente";
      }
      if (this.upKey.isPressed() || this.teclaW.isPressed()) {
        this.jogador1.y -= 3;
        anim = "costas";
      }
    }
    //LIMITAÇÕES DO JOGADOR..........
    if (this.jogador1.intersects(this.cama)) {
      this.jogador1.x = x;
      this.jogador1.y = y;
    }
    if (this.jogador1.intersects(this.mesa)) {
      this.jogador1.x = x;
      this.jogador1.y = y;
    }
    if (this.jogador1.intersects(this.caixasEsquerda)) {
      this.jogador1.x = x;
      this.jogador1.y = y;
    }
    if (this.jogador1.intersects(this.caixasDireita)) {
      this.jogador1.x = x;
      this.jogador1.y = y;
    }
    if (this.jogador1.intersects(this.banquinho)) {
      this.jogador1.x = x;
      this.jogador1.y = y;
    }

    if (this.teclaEspaco.wasPressed()) {
      this.usar += 1;
    }

    switch (this.usar) {
      case 1:
        this.trava = true;
        this.cameras.main.shake(200, 0.007);
        anim = "costas";
        this.fala111.setVisible(true);
        break;

      case 2:
        this.trava = false;
        this.fala111.setVisible(false);
        this.fala211.setVisible(true);
        anim = "frente";
        if(this.mae.y > 180){
          this.mae.y -= 5;
        }
        break;

      case 3:
        this.fala211.setVisible(false);
        this.fala311.setVisible(true);
        break;

      case 4:
        this.fala311.setVisible(false);
        this.fala411.setVisible(true);
        break;

      case 5:
        this.fala411.setVisible(false);
        this.fala511.setVisible(true);
        break;

      case 6:
        this.fala511.setVisible(false);
        this.fala611.setVisible(true);
        break;
    }

    if (this.usar >= 7) {
      this.fala611.setVisible(false);
      this.scene.start("Scene12");
    }
    this.jogador1.play(anim, true);
  }
}