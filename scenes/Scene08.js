//KLAUS VOLTA PRA CASA DEPOIS DE FURTAR
//CENÁRIO: ruaCasa 
class Scene08 extends SimpleScene {
  constructor() {
    super("Scene08");
    this.usar = 0;
    this.trava = false;
    this.trigger = true;
  }

  init() {
    this.physics.world.setBounds(0, 180, 800, 210);
  }

  preload() {
    this.load.image("ruaCasa", "assets/cenarios/ruaCasa2.png");
    this.load.image("casasSobrepostas", "assets/cenarios/detalhes/casinhasRua.png");
    //PERSONAGENS..........
    this.load.imageset("Klaus", "assets/personagens/klausJovem.png", 40, 70);
    this.load.imageset("Pedro", "assets/personagens/pedroJovem.png", 45, 75);

    //CAIXAS DE TEXTO..........
    this.load.imageset("task", "assets/caixasTexto/tasks.png", 350, 75);

    this.load.image("fala18", "assets/caixasTexto/falas/Scene8/fala1.png");
    this.load.image("fala28", "assets/caixasTexto/falas/Scene8/fala2.png");
    this.load.image("fala38", "assets/caixasTexto/falas/Scene8/fala3.png");
    this.load.image("fala48", "assets/caixasTexto/falas/Scene8/fala4.png");
    this.load.image("fala58", "assets/caixasTexto/falas/Scene8/fala5.png");
    this.load.image("fala68", "assets/caixasTexto/falas/Scene8/fala6.png");
    this.load.image("fala78", "assets/caixasTexto/falas/Scene8/fala7.png");
  }

  create() {
    this.cenario = this.add.image(575, 200, "ruaCasa");
    this.casinhas = this.add.image(575, 200, "casasSobrepostas");

    //PERSONAGENS..........
    this.pedro = this.add.sprite(550, 240, "Pedro", 3);
    this.jogador = this.add.sprite(300, 250, "Klaus", 4);
    this.jogador.enablePhysics();
    //this.jogador.setCollideWorldBounds(true);

    this.caixaPedro = this.add.rectangle(550, 250, 100, 100, 0xFF00FF);
    this.caixaPedro.setVisible(false);

    //CAIXAS TEXTO..........
    this.task = this.add.sprite(300, 100, "task", 0);
    this.textoTasks = this.add.text(250, 90, "Converse com Pedro.", 0Xffffff);
    this.textoTasks.setFontFamily("Candara");
    this.textoTasks.setFontSize(18);

    this.fala18 = this.add.image(300, 380, "fala18");
    this.fala18.setVisible(false);

    this.fala28 = this.add.image(300, 380, "fala28");
    this.fala28.setVisible(false);

    this.fala38 = this.add.image(300, 380, "fala38");
    this.fala38.setVisible(false);

    this.fala48 = this.add.image(300, 380, "fala48");
    this.fala48.setVisible(false);

    this.fala58 = this.add.image(300, 380, "fala58");
    this.fala58.setVisible(false);

    this.fala68 = this.add.image(300, 380, "fala68");
    this.fala68.setVisible(false);

    this.fala78 = this.add.image(300, 380, "fala78");
    this.fala78.setVisible(false);
    //
    //
    //LIMITAÇÃO 1/2..........

    this.box1 = this.add.rectangle(750, 215, 110, 60, 0xFFFFFF);
    this.box1.setVisible(false);

    //
    //CAMERA DO PERSONAGEM..........

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.jogador);
    this.cameras.main.roundPixels = true;
    //
    //
    //
    this.anims.create("andarDireitaK", "Klaus", 5, 7, 10);
    this.anims.create("andarEsquerdaK", "Klaus", 0, 2, 10);
    this.anims.create("frenteK", "Klaus", 3);
    this.anims.create("costasK", "Klaus", 4);

    this.anims.create("andarEsquerdaP", "Pedro", 0, 2, 10);

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
      this.scene.start("Scene09");
    }

    let x = this.jogador.x;
    let y = this.jogador.y;

    this.task.x = this.jogador.x;
    this.textoTasks.x = this.jogador.x;

    this.fala18.x = this.jogador.x;
    this.fala28.x = this.jogador.x;
    this.fala38.x = this.jogador.x;
    this.fala48.x = this.jogador.x;
    this.fala58.x = this.jogador.x;
    this.fala68.x = this.jogador.x;
    this.fala78.x = this.jogador.x;
    //
    let animK = "frenteK";
    let animP = "frenteP";

    if (this.trava == false) {
      if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
        this.jogador.x += 3;
        animK = "andarDireitaK";
      }
      if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
        this.jogador.x -= 3;
        animK = "andarEsquerdaK";
      }
      if (this.downKey.isPressed() || this.teclaS.isPressed()) {
        this.jogador.y += 3;
        animK = "frenteK";
      }
      if (this.upKey.isPressed() || this.teclaW.isPressed()) {
        this.jogador.y -= 3;
        animK = "costasK";
      }
    }
    //
    //
    //LIMITAÇÃO 2/2..........
    if (this.jogador.intersects(this.box1)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    //
    //
    //CONTINUIDADE DA HISTÓRIA..........
    if (this.teclaEspaco.wasPressed() && this.trigger == false) {
      this.usar += 1;
    }
    if (this.jogador.intersects(this.caixaPedro)) {
      this.trigger = false;
      switch (this.usar) {
        case 1:
          this.task.setVisible(false);
          this.textoTasks.setVisible(false);
          this.trava = true;
          this.fala18.setVisible(true);
          break;

        case 2:
          this.fala18.setVisible(false);
          this.fala28.setVisible(true);
          break;

        case 3:
          this.fala28.setVisible(false);
          this.fala38.setVisible(true);
          break;

        case 4:
          this.fala38.setVisible(false);
          this.fala48.setVisible(true);
          break;

        case 5:
          this.fala48.setVisible(false);
          this.fala58.setVisible(true);
          break;

        case 6:
          this.fala58.setVisible(false);
          this.fala68.setVisible(true);
          break;

        case 7:
          this.fala68.setVisible(false);
          this.pedro.x -= 4;
          animP = "andarEsquerdaP"
          if (this.pedro.x < 100) {
            this.scene.start("Scene09");
          }
          break;
      }

      if (this.usar >= 7) {
        this.trigger = true;
      }

      //if (this.usar >= 7) {}
    }
    this.pedro.play(animP, true);
    this.jogador.play(animK, true);
  }
}