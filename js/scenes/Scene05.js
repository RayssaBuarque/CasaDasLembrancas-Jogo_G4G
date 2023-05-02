//KLAUS VOLTA PRA CASA DEPOIS DE FURTAR
//CENÁRIO: ruaCasa 

class Scene05 extends SimpleScene {
  constructor() {
    super("Scene05");
    this.dialogo = 0;
    this.dica = 0;
  }

  init() {

  }

  preload() {
    this.load.image("cenario", "assets/cenarios/ruaCasa.png");
    this.load.image("cenario2", "assets/cenarios/ruaCasa2.png");
    this.load.image("sacola", "assets/cenarios/detalhes/sacola.png");

    //PERSONAGENS..........
    this.load.imageset("Klaus", "assets/personagens/klausJovem.png", 40, 70);
    this.load.imageset("Pedro", "assets/personagens/pedroJovem.png", 45, 75);

    //FALAS..........
    this.load.imageset("task", "assets/caixasTexto/tasks.png", 350, 75);
    this.load.image("fala15", "assets/caixasTexto/falas/Scene5/fala1.png");
    this.load.image("fala25", "assets/caixasTexto/falas/Scene5/fala2.png");
    this.load.image("fala35", "assets/caixasTexto/falas/Scene5/fala3.png");
    this.load.image("fala45", "assets/caixasTexto/falas/Scene5/fala4.png");
    this.load.image("fala55", "assets/caixasTexto/falas/Scene5/fala5.png");
    this.load.image("fala65", "assets/caixasTexto/falas/Scene5/fala6.png");
    this.load.image("fala75", "assets/caixasTexto/falas/Scene5/fala7.png");
  }

  create() {
    this.cenario = this.add.image(575, 200, "cenario");
    this.cenarioInvertido = this.add.image(1725, 200, "cenario2");
    this.sacola2 = this.add.image(290, 230, "sacola");
    this.sacola2.setScale(0.75);
    this.jogador = this.add.sprite(300, 250, "Klaus", 3);
    this.pedro = this.add.sprite(350, 243, "Pedro", 3);
    //this.drawGrid();
    //
    //CAIXAS DE TEXTO PRÉ-DISPOSTAS......
    this.caixaTask = this.add.sprite(300, 100, "task", 0);
    this.caixaTask.setVisible(false);

    this.textoTasks = this.add.text(220, 85, "Aperte \"ESPAÇO\" para dar\ncontinuidade na história.", 0Xffffff)
    this.textoTasks.setVisible(false);

    this.fala15 = this.add.image(300, 380, "fala15");
    this.fala15.setVisible(true);

    this.fala25 = this.add.image(300, 380, "fala25");
    this.fala25.setVisible(false);

    this.fala35 = this.add.image(300, 380, "fala35");
    this.fala35.setVisible(false);

    this.fala45 = this.add.image(300, 380, "fala45");
    this.fala45.setVisible(false);

    this.fala55 = this.add.image(300, 380, "fala55");
    this.fala55.setVisible(false);

    this.fala65 = this.add.image(300, 380, "fala65");
    this.fala65.setVisible(false);

    this.fala75 = this.add.image(300, 380, "fala75");
    this.fala75.setVisible(false);
    //
    //CAMERA DO PERSONAGEM..........
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.jogador);
    this.cameras.main.roundPixels = true;
    //
    //
    //
    this.anims.create("andarDireitaK", "Klaus", 5, 7, 10);
    this.anims.create("frenteK", "Klaus", 3);
    this.anims.create("costasK", "Klaus", 4);
    this.anims.create("andarDireitaP", "Pedro", 5, 7, 10);
    this.anims.create("frenteP", "Pedro", 3);
    this.anims.create("costasP", "Pedro", 4);
    //this.drawGrid();
    //
    //
    //TECLAS..........
    this.teclaEspaco = this.add.key("SPACE");
    this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene06");
    }

    //VARIÁVEIS ADAPTÁVEIS..........
    let x = this.jogador.x;
    let y = this.jogador.y;
    //
    //ANIMAÇÃO CONTÍNUA DOS PERSONAGENS..........
    let animK = "andarDireitaK";
    let animP = "andarDireitaP";
    //
    this.cenario.x -= 2.5;
    this.cenarioInvertido.x -= 2.5;

    if (this.cenario.x == -575) {
      this.cenario.x += 2300;
      this.dica += 1;
    }
    if (this.cenarioInvertido.x == -575) {
      this.cenarioInvertido.x += 2300;
      this.dica += 1;
    }
    //
    //
    //CONTINUIDADE DA HISTÓRIA..........
    if (this.dica >= 1 && this.dialogo == 0) {
      this.caixaTask.setVisible(true);
      this.textoTasks.setVisible(true);
    }

    if (this.teclaEspaco.wasPressed()) {
      this.dialogo += 1;
      this.caixaTask.setVisible(false);
      this.textoTasks.setVisible(false);
    }

    switch (this.dialogo) {
      case 1:
        this.fala15.setVisible(false);
        this.fala25.setVisible(true);
        break;

      case 2:
        this.fala25.setVisible(false);
        this.fala35.setVisible(true);
        break;

      case 3:
        this.fala35.setVisible(false);
        this.fala45.setVisible(true);
        break;

      case 4:
        this.fala45.setVisible(false);
        this.fala55.setVisible(true);
        break;

      case 5:
        this.fala55.setVisible(false);
        this.fala65.setVisible(true);
        break;

      case 6:
        this.fala65.setVisible(false);
        this.fala75.setVisible(true);
        break;

      case 7:
        this.fala75.setVisible(false);
        this.scene.start("Scene06");
        break;
    }

    if(this.dialogo >7){
       this.scene.start("Scene06");
    }

    this.jogador.play(animK, true);
    this.pedro.play(animP, true);
  }
}