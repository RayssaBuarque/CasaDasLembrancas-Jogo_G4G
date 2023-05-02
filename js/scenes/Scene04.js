/*
ESSA É A CENA EM QUE PEDRO CONVERSA COM KLAUS E O CONVENCE A ROUBAR O MERCADINHO

CENÁRIO: ruaMercado

//DEBUG::: PROBLEMA DA CENA MT CURTA
*/

class Scene04 extends SimpleScene {
  constructor() {
    super("Scene04");
    this.dialogo = 0;
    this.trave = false;
    this.trigger = false;
    this.usar = 0;
  }

  init() {
    // this.physics.world.setBounds(0, 180, 600, 210);
    this.physics.world.setBounds(0, 180, 1150, 210);
  }

  preload() {
    this.load.image("ruaMercado", "assets/cenarios/ruaMercado.png");
    this.load.image("sacola", "assets/cenarios/detalhes/sacola.png");

    //PERSONAGENS..........
    this.load.imageset("Klaus4", "assets/personagens/klausJovem.png", 40, 70);
    this.load.imageset("Pedro", "assets/personagens/pedroJovem.png", 45, 75);
    this.load.imageset("Vendedor", "assets/personagens/secundarios/donoMercado.png", 37.5, 96);

    //CAIXAS DE TEXTO..........
    this.load.imageset("task", "assets/caixasTexto/tasks.png", 350, 75);

    this.load.image("fala14", "assets/caixasTexto/falas/Scene4/fala1.png");
    this.load.image("fala24", "assets/caixasTexto/falas/Scene4/fala2.png");
    this.load.image("fala34", "assets/caixasTexto/falas/Scene4/fala3.png");
    this.load.image("fala44", "assets/caixasTexto/falas/Scene4/fala4.png");
    this.load.image("fala54", "assets/caixasTexto/falas/Scene4/fala5.png");
    this.load.image("fala64", "assets/caixasTexto/falas/Scene4/fala6.png");
    this.load.image("fala74", "assets/caixasTexto/falas/Scene4/fala7.png");
    this.load.image("fala84", "assets/caixasTexto/falas/Scene4/fala9.png");
    this.load.image("fala94", "assets/caixasTexto/falas/Scene4/fala8.png");
  }

  create() {    
    //TIMER TEST
    /*this.triggerTimer = this.time.addEvent({
            callback: this.timerEvent,
            callbackScope: this,
            delay: 60000, // 1000 = 1 second
            loop: true
        });*/

    this.cenario = this.add.image(575, 200, "ruaMercado");
    this.sacola = this.add.image(1025, 230, "sacola");
    this.sacola.setScale(0.75);
    this.vendedor = this.add.sprite(1100, 235, "Vendedor", 1);
    this.pedro = this.add.sprite(325, 240, "Pedro", 3);
    this.jogador = this.add.sprite(-50, 250, "Klaus4", 4);
    this.jogador.enablePhysics();
    this.jogador.setCollideWorldBounds(true);
    //
    //CAIXAS DE TEXTO PRÉ-DISPOSTAS......
    this.caixaTask = this.add.sprite(850, 100, "task", 0);
    this.caixaTask.setVisible(false);
    this.textoTasks = this.add.text(760, 85, "Pegue a sacola sem que o\n vendedor te veja.", 0Xffffff)
    this.textoTasks.setVisible(false);
    this.textoTasks.setFontFamily("Candara");
    this.textoTasks.setFontSize(18);

    this.fala14 = this.add.image(300, 380, "fala14");
    this.fala14.setVisible(false);

    this.fala24 = this.add.image(300, 380, "fala24");
    this.fala24.setVisible(false);

    this.fala34 = this.add.image(300, 380, "fala34");
    this.fala34.setVisible(false);

    this.fala44 = this.add.image(300, 380, "fala44");
    this.fala44.setVisible(false);

    this.fala54 = this.add.image(300, 380, "fala54");
    this.fala54.setVisible(false);

    this.fala64 = this.add.image(850, 380, "fala64");
    this.fala64.setVisible(false);

    this.fala74 = this.add.image(850, 380, "fala74");
    this.fala74.setVisible(false);

    this.fala94 = this.add.image(850, 380, "fala94");
    this.fala94.setVisible(false);

    this.fala84 = this.add.image(850, 380, "fala84");
    this.fala84.setVisible(false);
    //
    //
    //
    //
    //CAMERA DO PERSONAGEM
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.jogador);
    this.cameras.main.roundPixels = true;
    //
    //
    //
    this.anims.create("andarDireitaK", "Klaus4", 5, 7, 10);
    this.anims.create("andarEsquerdaK", "Klaus4", 0, 2, 10);
    this.anims.create("frenteK", "Klaus4", 3);
    this.anims.create("costasK", "Klaus4", 4);

    this.anims.create("andarDireitaP", "Pedro", 5, 7, 10);
    this.anims.create("andarEsquerdaP", "Pedro", 0, 2, 10);
    this.anims.create("frenteP", "Pedro", 3);
    this.anims.create("costasP", "Pedro", 4);

    //this.drawGrid();
    //
    //
    //
    this.teclaEspaco = this.add.key("SPACE");
    this.rightKey = this.add.key("RIGHT");
    this.leftKey = this.add.key("LEFT");
    this.teclaA = this.add.key("A");
    this.teclaD = this.add.key("D");

    this.vendedorPosicao = 1;
    this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene05");
    }
    this.caixaTask.x = this.jogador.x;
    this.textoTasks.x = this.jogador.x - 90;
    this.fala84.x = this.jogador.x;
    this.fala94.x = this.jogador.x;
    let x = this.jogador.x;
    let y = this.jogador.y;
    //
    let animK = "frenteK";
    let animP = "frenteP";

    if (this.jogador.x <= 1010 && this.trigger == true) {
      this.vendedor.setTexture("Vendedor", 1);
      this.vendedorPosicao = 1
    }

    if (this.jogador.x >= 1010 && this.trigger == true) {
      this.vendedor.setTexture("Vendedor", 0);
      this.vendedorPosicao = 0;
    }

    if (this.jogador.x <= 275) {
      this.jogador.x += 3;
      animK = "andarDireitaK";
    }

    if (this.dialogo == 7) {

      if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
        this.jogador.x += 3;
        animK = "andarDireitaK";
      }

      if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
        this.jogador.x -= 3;
        animK = "andarEsquerdaK";
      }
    }
    //
    //
    //
    if (this.jogador.x > 275) {
      this.fala14.setVisible(true);

      if (this.teclaEspaco.wasPressed() && this.trave == false) {
        this.dialogo += 1;
      }

      if (this.dialogo > 0) {
        this.fala14.setVisible(false);
      }

      switch (this.dialogo) {
        case 1:
          this.fala14.setVisible(false);
          this.fala24.setVisible(true);
          break;

        case 2:
          this.fala24.setVisible(false);
          this.fala34.setVisible(true);
          break;

        case 3:
          this.fala34.setVisible(false);
          this.fala44.setVisible(true);
          break;

        case 4:
          this.fala44.setVisible(false);
          this.fala54.setVisible(true);
          break;

        case 5:
          this.fala54.setVisible(false);
          this.textoTasks.setVisible(false);
          this.caixaTask.setVisible(false);
          this.fala84.setVisible(false);
          if (this.jogador.x <= 850) {
            animK = "andarDireitaK";
            animP = "andarDireitaP";
            this.jogador.x += 5;
            this.pedro.x += 5;
            this.trave = true;
          }
          if (this.jogador.x >= 850) {
            this.trave = false;
            this.fala64.setVisible(true);
          }
          break;

        case 6:
          this.fala64.setVisible(false);
          this.fala74.setVisible(true);
          break;

        case 7:
          this.fala74.setVisible(false);
          this.trave = true;
          this.trigger = true;
          this.caixaTask.setVisible(true);
          this.textoTasks.setVisible(true);
          if (this.jogador.intersects(this.sacola)) {
            this.trave = false;
          }
          break;

        case 8:
          if (this.vendedorPosicao == 1) {
            this.trave = false;
            this.textoTasks.setVisible(false);
            this.caixaTask.setVisible(false);
            this.fala84.setVisible(true);
            this.vendedor.setTexture("Vendedor", 0);
          }

          if (this.vendedorPosicao != 1) {
            this.dialogo = 5;
            this.jogador.x = 851;
          }
          break;

        case 9:
          this.fala84.setVisible(false);
          this.fala94.setVisible(true);
          this.vendedor.setTexture("Vendedor", 0);
          break;

        case 10:
          this.trave = true;
          this.fala94.setVisible(false);
          this.sacola.x -= 7;
          this.pedro.x -= 7;
          this.jogador.x -= 7;
          this.cameras.main.shake(1000);
          animK = "andarEsquerdaK";
          animP = "andarEsquerdaP";
          if (this.jogador.x <= 400) {
            this.scene.start("Scene05");
          }
          break;
      }
    }

    if(this.usar >10){
       this.scene.start("Scene05");
    }
    
    this.jogador.play(animK, true);
    this.pedro.play(animP, true);
  }
}