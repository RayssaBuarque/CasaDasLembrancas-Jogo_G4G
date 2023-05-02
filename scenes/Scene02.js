//ESSA É A CENA INICIAL DE MUDANÇA
//CENÁRIO: salaMudanca

class Scene02 extends SimpleScene {
  constructor() {
    super("Scene02");
    this.velocidade = 3;
    this.dialogo = 0;
  }

  init() {
    //LIMITAÇÃO DO MAPA..........
    this.physics.world.setBounds(260, 50, 300, 350);
  }

  preload() {
    //IMAGENS..........
    this.load.image("salaKlaus", "assets/cenarios/salaMudanca.png");
    this.load.image("caixa", "assets/cenarios/detalhes/caixa1.png");

    //SPRITES..........
    this.load.image("mae", "assets/personagens/maeKlaus.png");
    this.load.imageset("Klaus", "assets/personagens/klausAdulto.png", 45, 100);
    this.load.imageset("task", "assets/caixasTexto/tasks.png", 350, 75);

    //FALAS..........
    this.load.image("fala1", "assets/caixasTexto/falas/Scene2/fala1.png");
    this.load.image("fala2", "assets/caixasTexto/falas/Scene2/fala2.png");
    this.load.image("fala3", "assets/caixasTexto/falas/Scene2/fala3.png");
    this.load.image("fala4", "assets/caixasTexto/falas/Scene2/fala4.png");
    this.load.image("fala5", "assets/caixasTexto/falas/Scene2/fala5.png");
    this.load.image("fala6", "assets/caixasTexto/falas/Scene2/fala6.png");
    this.load.image("fala7", "assets/caixasTexto/falas/Scene2/fala7.png");
    this.load.image("fala8", "assets/caixasTexto/falas/Scene2/fala8.png");
    this.load.image("interacao12","assets/caixasTexto/falas/Scene2/interacaoDog.png");
  }

  create() {
    //CENARIO..........
    this.cenario = this.add.image(300, 200, "salaKlaus");
    this.caixa = this.add.image(500, 350, "caixa");

    //PERSONAGENS..........
    this.mae = this.add.image(500, 150, "mae");
    this.jogador = this.add.sprite(300, 330, "Klaus", 3);
    this.jogador.enablePhysics();
    this.jogador.setCollideWorldBounds(true);


    //CAIXAS DE TEXTO PRÉ-DISPOSTAS......
    this.caixaTask = this.add.sprite(300, 50, "task", 0);
    this.caixaTask.setVisible(true);

    this.fala1 = this.add.image(300, 330, "fala1");
    this.fala1.setVisible(false);

    this.fala2 = this.add.image(300, 330, "fala2");
    this.fala2.setVisible(false);

    this.fala3 = this.add.image(300, 330, "fala3");
    this.fala3.setVisible(false);

    this.fala4 = this.add.image(300, 330, "fala4");
    this.fala4.setVisible(false);

    this.fala5 = this.add.image(300, 330, "fala5");
    this.fala5.setVisible(false);

    this.fala6 = this.add.image(300, 330, "fala6");
    this.fala6.setVisible(false);

    this.fala7 = this.add.image(300, 330, "fala7");
    this.fala7.setVisible(false);

    this.fala8 = this.add.image(300, 330, "fala8");
    this.fala8.setVisible(false);

    this.interacao12 = this.add.image(300, 330, "interacao12");
    this.interacao12.setVisible(false);
    //
    //
    //TEXTOS..........
    this.textoTasks = this.add.text(225, 40, "Vá em direção a sua mãe.", 0Xffffff)
    this.textoTasks.setVisible(true);
    this.textoTasks.setFontFamily("Candara");
    this.textoTasks.setFontSize(18);

    this.caixaHitBox1 = this.add.rectangle(500,350,150,100,0x00ff00);
    this.caixaHitBox1.setVisible(false);
    //
    //
    //CAMERA DO PERSONAGEM..........
    //
    //
    //ANIMACOES..........
    //("ApelidoDaAnimacao", "nomeDoSprite",número do frame inicial, número do frame final, quantidade de frames por segundo)
    this.anims.create("andarDireita", "Klaus", 5, 7, 10);
    this.anims.create("andarEsquerda", "Klaus", 0, 2, 10);
    this.anims.create("frente", "Klaus", 3);
    this.anims.create("costas", "Klaus", 4);
    //this.drawGrid();
    //
    //
    //TECLADO DE ANDAR..........
    this.teclaEspaco = this.add.key("SPACE");
    this.rightKey = this.add.key("RIGHT");
    this.leftKey = this.add.key("LEFT");
    this.downKey = this.add.key("DOWN");
    this.upKey = this.add.key("UP");
    this.teclaW = this.add.key("W");
    this.teclaA = this.add.key("A");
    this.teclaS = this.add.key("S");
    this.teclaD = this.add.key("D");
    //
    //
    //
    this.physics.add.collider(this.jogador, this.caixa);

  this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene03");
    }
    
    let x = this.jogador.x;
    let y = this.jogador.y;

    let anim = "frente";
    //
    //
    //SETAS/TECLAS..........
    if (this.rightKey.isPressed() || this.teclaD.isPressed()) {
      this.jogador.x += this.velocidade;
      anim = "andarDireita";
    }
    if (this.leftKey.isPressed() || this.teclaA.isPressed()) {
      this.jogador.x -= this.velocidade;
      anim = "andarEsquerda";
    }
    if (this.downKey.isPressed() || this.teclaS.isPressed()) {
      this.jogador.y += this.velocidade;
      anim = "frente";
    }

    if (this.upKey.isPressed() || this.teclaW.isPressed()) {
      this.jogador.y -= this.velocidade;
      anim = "costas";
    }
    //CAMERA SHAKE
    /*
    if (this.teclaP.wasPressed() || this.teclaP.wasPressed()) {
      this.cameras.main.shake(1000);
    }*/

    //
    //
    //COLISÕES..........
    if (this.jogador.intersects(this.caixa)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    //
    this.jogador.play(anim, true);
    //
    //
    //
    //
    //DESENVOLVIMENTO DA HISTÓRIA..........
    //Esse if é o "gatilho", as falas só vão aparecer dentro dessa condição (o maior if de todos)
    if (this.jogador.intersects(this.mae)) {
      this.textoTasks.setText("Aperte \"espaço\" para interagir.");
      this.textoTasks.x = 210;

      //IF espaço for pressionado, this.usar aumenta 1
      if (this.teclaEspaco.wasPressed()) {
        this.dialogo += 1;
      }


      //CASO o this.dialogo for x, ele executa algo
      switch (this.dialogo) {
        //caso this.dialogo for 1:
        case 1:
          //as falas aparecem/somem dependendo do contexto
          this.fala1.setVisible(true);
          this.textoTasks.setVisible(false);
          this.caixaTask.setVisible(false);
          //o CASO acaba e começa o próximo
          break;

        case 2:
          this.fala1.setVisible(false);
          this.fala2.setVisible(true);
          break;

        case 3:
          this.fala2.setVisible(false);
          this.fala3.setVisible(true);
          break;

        case 4:
          this.fala3.setVisible(false);
          this.fala4.setVisible(true);
          break;

        case 5:
          this.fala4.setVisible(false);
          this.fala5.setVisible(true);
          break;

        case 6:
          this.fala5.setVisible(false);
          this.fala6.setVisible(true);
          break;

        case 7:
          this.fala6.setVisible(false);
          this.fala7.setVisible(true);
          break;

        case 8:
          this.fala7.setVisible(false);
          this.fala8.setVisible(true);
          break;

        case 9:
          this.fala8.setVisible(false);
          this.scene.start("Scene03");
          break;
      }
      if(this.dialogo>9){
         this.scene.start("Scene03");
      }
    }
  }
}