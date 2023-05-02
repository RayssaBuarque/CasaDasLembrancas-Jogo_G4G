//ESSA É A CENA ONDE O PERSONAGEM ACHA A FOTO
//CENARIO:quartoMudanca

///ESTA FALTANDO COORDENAR O POPUP DE TASKS COM A CAMERA DO PERSONAGEM
class Scene03 extends SimpleScene {
  constructor() {
    super("Scene03");
    this.usar = 0;
    this.trava = false;
  }

  init() {
    this.physics.world.setBounds(50, 50, 500, 330);
    //this.cameras.main.fadeIn(500, 0, 0, 0);
  }

  preload() {
    this.load.image("quartoMudanca", "assets/cenarios/quartoMudanca.png");
    this.load.imageset("Klaus1", "assets/personagens/klausAdulto.png", 45, 100);
    //
    this.load.image("foto", "assets/cenarios/detalhes/fotografia.png");
    //
    //
    //PRELOAD CAIXAS DE TEXTO..........
    this.load.imageset("task2", "assets/caixasTexto/tasks.png", 350, 75);
    this.load.image("interacaoMesa", "assets/caixasTexto/falas/Scene3/interacao1Mesa.png");
    this.load.image("interacaoEstante", "assets/caixasTexto/falas/Scene3/interacao2Estante.png");
    this.load.image("interacaoCama", "assets/caixasTexto/falas/Scene3/interacao3Cama.png");
    this.load.image("interacaoCaixas", "assets/caixasTexto/falas/Scene3/interacao4CaixasDireita.png");
    this.load.image("interacaoFoto", "assets/caixasTexto/falas/Scene3/interacao5Foto.png");
    this.load.imageset("interacaoFinal", "assets/caixasTexto/falas/Scene3/interacao6.png", 350, 140);

    //FALAS..........
    //this.load.image("fala1", "assets/caixasTexto/falas/Scene3/fala1.png");
  }

  create() {
    this.cenario = this.add.image(300, 200, "quartoMudanca");
    this.jogador1 = this.add.sprite(450, 380, "Klaus1", 4);
    this.jogador1.enablePhysics();
    this.jogador1.setCollideWorldBounds(true);
    this.fotografia = this.add.image(300, 200, "foto");
    this.fotografia.setVisible(false);
    //
    //
    //
    //
    //CAIXAS DE TEXTO..........
    this.caixaTask2 = this.add.sprite(300, 50, "task2", 0);
    this.caixaTask2.setVisible(true);

    this.interacaoMesa = this.add.image(300, 340, "interacaoMesa");
    this.interacaoMesa.setVisible(false);
    this.interacaoEstante = this.add.image(300, 340, "interacaoEstante");
    this.interacaoEstante.setVisible(false);
    this.interacaoCama = this.add.image(300, 340, "interacaoCama");
    this.interacaoCama.setVisible(false);
    this.interacaoCaixas = this.add.image(300, 340, "interacaoCaixas");
    this.interacaoCaixas.setVisible(false);
    this.interacaoFoto = this.add.image(300, 340, "interacaoFoto");
    this.interacaoFoto.setVisible(false);
    this.interacaoFinal = this.add.sprite(300, 340, "interacaoFinal", 0);
    this.interacaoFinal.setVisible(false);

    //CAIXAS DE TEXTO PRÉ-DISPOSTAS......
    //this.fala1 = this.add.image(300, 330, "fala1");
    //this.fala1.setVisible(true);


    ///
    //
    //TEXTOS..........
    this.textoTasks2 = this.add.text(210, 35, "Confira se não há nada fora\ndas caixas pelo quarto.", 0Xffffff)
    this.textoTasks2.setVisible(true);
    //
    //
    //
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
    //
    //
    //HITBOXES
    this.mesaBox = this.add.rectangle(140, 320, 250, 175, 0x00ff0f);
    this.mesaBox.setVisible(false);
    this.estanteBox = this.add.rectangle(100, 60, 80, 90, 0x00ff0f);
    this.estanteBox.setVisible(false);
    this.camaBox = this.add.rectangle(380, 140, 80, 90, 0x00ff0f);
    this.camaBox.setVisible(false);
    this.fotoBox = this.add.rectangle(250, 140, 80, 10, 0x00ff0f);
    this.fotoBox.setVisible(false);
    this.caixasBox = this.add.rectangle(500, 160, 80, 80, 0x00ff0f);
    this.caixasBox.setVisible(false);
    //
    //
    //CAMERA DO PERSONAGEM..........
    /*
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.jogador1);
    this.cameras.main.roundPixels = true;*/
    //
    //
    //ANIMAÇÕES DOS PERSONAGENS
    this.anims.create("andarDireita", "Klaus1", 5, 7, 10);
    this.anims.create("andarEsquerda", "Klaus1", 0, 2, 10);
    this.anims.create("frente", "Klaus1", 3);
    this.anims.create("costas", "Klaus1", 4);
    //this.drawGrid();
    //
    //
    //
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
      this.scene.start("Scene04");
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

    //
    //
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
    //
    //
    //INTERAÇÕES..........
    if (this.jogador1.intersects(this.mesaBox)) {
      if (this.teclaEspaco.wasPressed()) {
        this.usar += 1;
      }
      switch (this.usar) {
        case 1:
          this.trava = true;
          this.interacaoFoto.setVisible(false);
          this.interacaoCaixas.setVisible(false);
          this.interacaoCama.setVisible(false);
          this.interacaoEstante.setVisible(false);
          this.interacaoMesa.setVisible(true);;
          break;

        case 2:
          this.interacaoMesa.setVisible(false);
          this.usar = 0;
          this.trava = false;
          break;
      }
    }
    if (this.jogador1.intersects(this.estanteBox)) {
      if (this.teclaEspaco.wasPressed()) {
        this.usar += 1;
      }
      switch (this.usar) {
        case 1:
          this.trava = true;
          anim = "costas;"
          this.interacaoFoto.setVisible(false);
          this.interacaoCaixas.setVisible(false);
          this.interacaoCama.setVisible(false);
          this.interacaoEstante.setVisible(true);
          this.interacaoMesa.setVisible(false);;
          break;

        case 2:
          this.interacaoEstante.setVisible(false);
          this.usar = 0;
          this.trava = false;
          break;
      }
    }
    if (this.jogador1.intersects(this.camaBox)) {
      if (this.teclaEspaco.wasPressed()) {
        this.usar += 1;
      }
      switch (this.usar) {
        case 1:
          this.trava = true;
          anim = "costas";
          this.interacaoFoto.setVisible(false);
          this.interacaoCaixas.setVisible(false);
          this.interacaoCama.setVisible(true);
          this.interacaoEstante.setVisible(false);
          this.interacaoMesa.setVisible(false);;
          break;

        case 2:
          this.interacaoCama.setVisible(false);
          this.usar = 0;
          this.trava = false;
          break;
      }
    }
    if (this.jogador1.intersects(this.caixasBox)) {
      if (this.teclaEspaco.wasPressed()) {
        this.usar += 1;
      }
      switch (this.usar) {
        case 1:
          this.trava = true;
          anim = "costas";
          this.interacaoFoto.setVisible(false);
          this.interacaoCaixas.setVisible(true);
          this.interacaoCama.setVisible(false);
          this.interacaoEstante.setVisible(false);
          this.interacaoMesa.setVisible(false);
          break;

        case 2:
          this.trava = false;
          this.interacaoCaixas.setVisible(false);
          this.usar = 0;
          break;
      }
    }
    if (this.jogador1.intersects(this.fotoBox)) {
      if (this.teclaEspaco.wasPressed()) {
        this.usar += 1;
      }
      switch (this.usar) {
        case 1:
          anim = "costas";
          this.trava = true;
          this.interacaoFoto.setVisible(true);
          this.interacaoCaixas.setVisible(false);
          this.interacaoCama.setVisible(false);
          this.interacaoEstante.setVisible(false);
          this.interacaoMesa.setVisible(false);
          this.caixaTask2.setVisible(false);
          this.textoTasks2.setVisible(false);
          break;

        case 2:
          this.fotografia.setVisible(true);
          this.interacaoFoto.setVisible(false);
          break;

        case 3:
          this.interacaoFinal.setVisible(true);
          break;

        case 4:
          this.interacaoFinal.setTexture("interacaoFinal", 1);
          break;

        case 5:
          this.scene.start("Scene04");
          break;
      }

      if (this.usar > 5) {
        this.scene.start("Scene04");
      }

    }
    if (this.usar >= 5){
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => { this.time.delayedCall(500, () => {this.scene.start("Scene04")})});
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    }
    this.jogador1.play(anim, true);
  }
}