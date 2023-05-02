//KLAUS CONHECE A ONG
//CENÁRIO: dentroDaOng 

class Scene10 extends SimpleScene {
  constructor() {
    super("Scene10");
    this.usar = 0;
    this.trava = false;
    this.zezinho = 0;
  }

  init() {
    this.physics.world.setBounds(56, 55, 490, 330);
  }

  preload() {
    this.load.image("cenario3", "assets/cenarios/dentroDaOng.png");

    //CRIANÇAS..........
    this.load.image("emo", "assets/personagens/secundarios/emo.png");
    this.load.image("menina1", "assets/personagens/secundarios/menina1.png");
    this.load.image("menina2", "assets/personagens/secundarios/menina2.png");
    this.load.image("menina3", "assets/personagens/secundarios/menina3.png");
    this.load.image("menina4", "assets/personagens/secundarios/menina4.png");
    this.load.image("menino1", "assets/personagens/secundarios/menino1.png");
    this.load.image("menino2", "assets/personagens/secundarios/menino2.png");
    this.load.image("menino3", "assets/personagens/secundarios/menino3.png");

    //PERSONAGENS..........
    this.load.imageset("Klaus10", "assets/personagens/klausJovem.png", 40, 70);
    this.load.imageset("Voluntario", "assets/personagens/voluntario.png", 45, 100);

    //CAIXAS DE TEXTO..........
    this.load.imageset("task", "assets/caixasTexto/tasks.png", 350, 75);
    this.load.image("fala10", "assets/caixasTexto/falas/Scene10/fala1.png");
    this.load.image("fala20", "assets/caixasTexto/falas/Scene10/fala2.png");
    this.load.image("fala30", "assets/caixasTexto/falas/Scene10/fala3.png");
    this.load.image("fala40", "assets/caixasTexto/falas/Scene10/fala4.png");
    this.load.image("fala50", "assets/caixasTexto/falas/Scene10/fala5.png");
    this.load.image("fala60", "assets/caixasTexto/falas/Scene10/fala6.png");
    this.load.image("fala70", "assets/caixasTexto/falas/Scene10/fala7.png");
    this.load.image("fala80", "assets/caixasTexto/falas/Scene10/fala8.png");
    this.load.image("fala90", "assets/caixasTexto/falas/Scene10/fala9.png");
    this.load.image("fala100", "assets/caixasTexto/falas/Scene10/fala10.png");
    this.load.image("fala110", "assets/caixasTexto/falas/Scene10/fala11.png");
  }

  create() {
    this.cenario = this.add.image(300, 200, "cenario3");

    //PERSONAGENS..........
    this.voluntario = this.add.sprite(470, 270, "Voluntario", 3);
    this.voluntario.setScale(0.8);
    this.jogador = this.add.sprite(300, 350, "Klaus10", 4);
    this.jogador.setScale(0.8);
    this.jogador.enablePhysics();
    this.jogador.setCollideWorldBounds(true);

    //CRIANÇAS..........
    this.crianca1 = this.add.image(120, 130, "emo");
    this.crianca2 = this.add.image(100, 130, "menina1");
    this.crianca3 = this.add.image(140, 130, "menina2");
    this.crianca4 = this.add.image(160, 130, "menina3");
    this.crianca5 = this.add.image(180, 130, "menino1");
    this.crianca6 = this.add.image(200, 130, "menino2");
    this.crianca7 = this.add.image(220, 130, "menino3");
    this.crianca8 = this.add.image(243, 153, "menina4");
    //
    //
    //CAIXAS DE TEXTO..........
    this.caixaTask = this.add.sprite(300, 50, "task", 0);
    this.caixaTask.setVisible(true);
    this.textoTasks = this.add.text(225, 30, "Converse com as crianças\npara avançar.", 0Xffffff)
    this.textoTasks.setVisible(true);
    this.textoTasks.setFontFamily("Candara");
    this.textoTasks.setFontSize(18);

    this.fala10 = this.add.image(300, 330, "fala10");
    this.fala10.setVisible(false);
    this.fala20 = this.add.image(300, 330, "fala20");
    this.fala20.setVisible(false);
    this.fala30 = this.add.image(300, 330, "fala30");
    this.fala30.setVisible(false);
    this.fala40 = this.add.image(300, 330, "fala40");
    this.fala40.setVisible(false);
    this.fala50 = this.add.image(300, 330, "fala50");
    this.fala50.setVisible(false);
    this.fala60 = this.add.image(300, 330, "fala60");
    this.fala60.setVisible(false);
    this.fala70 = this.add.image(300, 330, "fala70");
    this.fala70.setVisible(false);
    this.fala80 = this.add.image(300, 330, "fala80");
    this.fala80.setVisible(false);
    this.fala90 = this.add.image(300, 330, "fala90");
    this.fala90.setVisible(false);
    this.fala100 = this.add.image(300, 330, "fala100");
    this.fala100.setVisible(false);
    this.fala110 = this.add.image(300, 330, "fala110");
    this.fala110.setVisible(false);     //COLISÕES..........
    this.caixa = this.add.rectangle(170, 150, 175, 70, 0xFF00FF);
    this.caixa.setVisible(false);
    this.caixaSecretaria = this.add.rectangle(450, 100, 175, 100, 0x0ff0f0);
    this.caixaSecretaria.setVisible(false);
    //this.drawGrid();

    this.caixaVoluntario = this.add.rectangle(470, 270, 60, 90, 0x0f0fff);
    this.caixaVoluntario.setVisible(false);

    this.mesaComida = this.add.rectangle(439, 260, 155, 10, 0xFF0FF0);
    this.mesaComida.setVisible(false);
    //
    this.mesaExtensa = this.add.rectangle(165, 140, 155, 20, 0x00F00F);
    this.mesaExtensa.setVisible(false);

    this.balcao = this.add.rectangle(450, 85, 200, 40, 0x00F00F);
    this.balcao.setVisible(false);
    //
    //
    //
    //
    //ANIMAÇÕES..........
    this.anims.create("andarEsquerdaV", "Voluntario", 0, 2, 10);
    this.anims.create("frenteV", "Voluntario", 3);
    this.anims.create("costasV", "Voluntario", 4);
    this.anims.create("andarDireitaKK", "Klaus10", 5, 7, 10);
    this.anims.create("andarEsquerdaKK", "Klaus10", 0, 2, 10);
    this.anims.create("frenteKK", "Klaus10", 3);
    this.anims.create("costasKK", "Klaus10", 4);
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
      this.scene.start("Scene10");
    }
    let x = this.jogador.x;
    let y = this.jogador.y;
    //
    let animKK = "frenteKK";

    //TECLAS..........
    if (this.trava == false) {
      if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
        this.jogador.x += 3;
        animKK = "andarDireitaKK";
      }
      if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
        this.jogador.x -= 3;
        animKK = "andarEsquerdaKK";
      }
      if (this.downKey.isPressed() || this.teclaS.isPressed()) {
        this.jogador.y += 3;
        animKK = "frenteKK";
      }
      if (this.upKey.isPressed() || this.teclaW.isPressed()) {
        this.jogador.y -= 3;
        animKK = "costasKK";
      }
    }
    if (this.teclaEspaco.wasPressed()) {
      this.usar += 1;
    }
    //
    //
    //EXTRAS..........
    if (this.jogador.intersects(this.caixaSecretaria)) {
      switch (this.usar) {
        case 1:
          this.trava = true;
          animKK = "costasKK";
          this.fala90.setVisible(true);
          if (this.jogador.intersects(this.caixaSecretaria)) {
            this.zezinho = + 1;
          }
          break;

        case 2:
          this.fala90.setVisible(false);
          this.usar = 0;
          this.trava = false;
          break;
      }
    }

    if (this.jogador.intersects(this.caixaVoluntario)) {
      switch (this.usar) {
        case 1:
          this.trava = true;
          animKK = "costasKK";
          this.fala100.setVisible(true);
          break;

        case 2:
          if (this.zezinho == 0) {
            this.fala100.setVisible(false);
            this.fala110.setVisible(false);
            this.usar = 0;
            this.trava = false;
          }
          if (this.zezinho > 0) {
            this.fala110.setVisible(true);
          }
          break;

        case 3:
          this.fala110.setVisible(false);
          this.fala100.setVisible(false);
          this.trava = false;
          this.usar = 0;
          break;
      }
    }
    //
    //
    //CONTINUIDADE DA HISTÓRIA.........
    if (this.jogador.intersects(this.caixa)) {
      switch (this.usar) {

        case 1:
          this.fala10.setVisible(true);
          this.trava = true;
          animKK = "costasKK";
          break;

        case 2:
          this.fala10.setVisible(false);
          this.fala20.setVisible(true);
          animKK = "costasKK";
          break;

        case 3:
          this.fala20.setVisible(false);
          this.fala30.setVisible(true);
          animKK = "costasKK";
          break;

        case 4:
          this.fala30.setVisible(false);
          this.fala40.setVisible(true);
          animKK = "costasKK";
          break;

        case 5:
          this.fala40.setVisible(false);
          this.fala50.setVisible(true);
          animKK = "costasKK";
          break;

        case 6:
          this.fala50.setVisible(false);
          this.fala60.setVisible(true);
          animKK = "costasKK";
          break;

        case 7:
          this.fala60.setVisible(false);
          this.fala70.setVisible(true);
          animKK = "costasKK";
          break;

        case 8:
          this.fala70.setVisible(false);
          this.fala80.setVisible(true);
          animKK = "costasKK";
          break;
      }
    }

    if (this.jogador.intersects(this.mesaComida)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }

    if (this.jogador.intersects(this.mesaExtensa)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }

    if (this.jogador.intersects(this.balcao)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }

    if (this.usar >= 9) {
      this.scene.start("Scene11");
    }
    this.jogador.play(animKK, true);
  }

}