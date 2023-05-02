//KLAUS VAI PARA A SALA E CONVERSA COM SUA MÃE
//CENÁRIO: salaKlausCrianca

class Scene06 extends SimpleScene {
  constructor() {
    super("Scene06");
    this.trava = false;
  }

  init() {
    this.physics.world.setBounds(40, 80, 500, 320);
    this.usar = 0;
    this.trigger = true;
  }

  preload() {
    //CENARIO..........
    this.load.image("salaKlausCrianca", "assets/cenarios/salaKlausCrianca.png");
    this.load.image("salaKlausM", "assets/cenarios/detalhes/salaKlaus.png");

    //PERSONAGENS..........
    this.load.imageset("KlausJ", "assets/personagens/klausJovem.png", 40, 70);
    this.load.image("Mae", "assets/personagens/maeKlaus.png");

    //FALAS/CAIXAS DE TEXTO..........
    this.load.image("auAu", "assets/caixasTexto/falas/Scene6/auAu.png");
    this.load.image("fala16", "assets/caixasTexto/falas/Scene6/fala1.png");
    this.load.image("fala26", "assets/caixasTexto/falas/Scene6/fala2.png");
    this.load.image("fala36", "assets/caixasTexto/falas/Scene6/fala3.png");
    this.load.image("fala46", "assets/caixasTexto/falas/Scene6/fala4.png");
    this.load.image("fala56", "assets/caixasTexto/falas/Scene6/fala5.png");
    this.load.image("fala66", "assets/caixasTexto/falas/Scene6/fala6.png");
    this.load.image("fala76", "assets/caixasTexto/falas/Scene6/fala7.png");
    this.load.image("fala86", "assets/caixasTexto/falas/Scene6/fala8.png");
  }

  create() {
    this.salaKlausCrianca = this.add.image(300, 200, "salaKlausCrianca");
    this.jogador = this.add.sprite(400, 100, "KlausJ", 3);
    this.jogador.enablePhysics();
    this.jogador.setCollideWorldBounds(true);
    this.mae = this.add.image(370, 230, "Mae");
    //
    //
    //COLISÕES..........
    this.mesa = this.add.rectangle(390, 270, 175, 70, 0xFF00FF);
    this.mesa.setVisible(false);

    this.tv = this.add.rectangle(110, 190, 200, 100, 0xffff00);
    this.tv.setVisible(false);

    this.sofa = this.add.rectangle(110, 390, 200, 60, 0xffff00);
    this.sofa.setVisible(false);

    this.quina = this.add.rectangle(200, 200, 50, 50, 0x0000FF);
    this.quina.setVisible(false);

    this.mesaSofa = this.add.image(300, 200, "salaKlausM");
    //
    //
    //
    //
    //CAIXAS TEXTO..........
    this.auAu = this.add.image(300, 330, "auAu");
    this.auAu.setVisible(false);
    this.fala16 = this.add.image(300, 330, "fala16");
    this.fala16.setVisible(false);
    this.fala26 = this.add.image(300, 330, "fala26");
    this.fala26.setVisible(false);
    this.fala36 = this.add.image(300, 330, "fala36");
    this.fala36.setVisible(false);
    this.fala46 = this.add.image(300, 330, "fala46");
    this.fala46.setVisible(false);
    this.fala56 = this.add.image(300, 330, "fala56");
    this.fala56.setVisible(false);
    this.fala66 = this.add.image(300, 330, "fala66");
    this.fala66.setVisible(false);
    this.fala76 = this.add.image(300, 330, "fala76");
    this.fala76.setVisible(false);
    this.fala86 = this.add.image(300, 330, "fala86");
    this.fala86.setVisible(false);
    //
    //
    //
    //
    //HITBOXES..........
    this.doguinho = this.add.rectangle(280, 120, 60, 60, 0x0ff0ff0);
    this.doguinho.setVisible(false);

    this.maeHitBox = this.add.rectangle(370, 210, 90, 50, 0x00F0FFF);
    this.maeHitBox.setVisible(false);
    //
    //
    //
    this.anims.create("andarDireitaK", "KlausJ", 5, 7, 10);
    this.anims.create("andarEsquerdaK", "KlausJ", 0, 2, 10);
    this.anims.create("frenteK", "KlausJ", 3);
    this.anims.create("costasK", "KlausJ", 4);
    //
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
      this.scene.start("Scene07");
    }
    let x = this.jogador.x;
    let y = this.jogador.y;
    //
    let animK = "frenteK";

    if(this.trava == false){
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

    //COLISÕES..........(2/2)
    if (this.jogador.intersects(this.mesa)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    if (this.jogador.intersects(this.tv)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    if (this.jogador.intersects(this.quina)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    if (this.jogador.intersects(this.sofa)) {
      this.jogador.x = x;
      this.jogador.y = y;
    }
    //
    //
    //CONTINUIDADE DA HISTÓRIA..........

    if (this.teclaEspaco.wasPressed()) {
      this.usar += 1;
    }

    if (this.jogador.intersects(this.doguinho) && this.trigger == true) {
      if (this.usar == 1) {
        this.trava = true;
        this.auAu.setVisible(true);
      }
      if (this.usar > 1) {
        this.trava = false;
        this.auAu.setVisible(false);
        this.usar = 0;
      }
    }

    if (this.jogador.intersects(this.maeHitBox)) {
      switch (this.usar) {

        case 1:
          this.trava = true;
          this.fala16.setVisible(true);
          this.trigger = false;
          break;

        case 2:
          this.fala16.setVisible(false);
          this.fala26.setVisible(true);
          break;

        case 3:
          this.fala26.setVisible(false);
          this.fala36.setVisible(true);
          break;

        case 4:
          this.fala36.setVisible(false);
          this.fala46.setVisible(true);
          break;

        case 5:
          this.fala46.setVisible(false);
          this.fala56.setVisible(true);
          break;

        case 6:
          this.fala56.setVisible(false);
          this.fala66.setVisible(true);
          break;

        case 7:
          this.fala66.setVisible(false);
          this.fala76.setVisible(true);
          break;

        case 8:
          this.fala76.setVisible(false);
          this.fala86.setVisible(true);
          break;

        case 9:
          this.fala86.setVisible(false);
          this.scene.start("Scene07");
          break;
      }
    }

    if(this.usar > 9){
       this.scene.start("Scene07");
    }

    this.jogador.play(animK, true);
  }
}