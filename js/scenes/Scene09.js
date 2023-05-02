//KLAUS VAI PARA A FRENTE DA ONG APÓS BRIGAR COM PEDRO

/*essa cena poderia ser como num filme... o jogador não aperta nenhum botão, só segue a vida... */
//CENÁRIO: ruaOng 

class Scene09 extends SimpleScene {
  constructor() {
    super("Scene09");
    this.dialogo = 0;
  }

  init() {

  }

  preload() {
    this.load.image("ruaOng1", "assets/cenarios/ruaOng.png");
    this.load.imageset("Klaus", "assets/personagens/klausJovem.png", 40, 70);
    //
    //LOAD DOS PERSONAGENS..........
    this.load.imageset("Klaus", "assets/personagens/klausJovem.png", 40, 70);
    this.load.imageset("Voluntario", "assets/personagens/voluntario.png", 45, 100);
    //
    //LOAD DAS FALAS..........
    this.load.image("fala19", "assets/caixasTexto/falas/Scene9/fala1.png");
    this.load.image("fala29", "assets/caixasTexto/falas/Scene9/fala2.png");
    this.load.image("fala39", "assets/caixasTexto/falas/Scene9/fala3.png");
    this.load.image("fala49", "assets/caixasTexto/falas/Scene9/fala4.png");
    this.load.image("fala59", "assets/caixasTexto/falas/Scene9/fala5.png");
    this.load.image("fala69", "assets/caixasTexto/falas/Scene9/fala6.png");
    this.load.image("fala79", "assets/caixasTexto/falas/Scene9/fala7.png");
    this.load.image("fala89", "assets/caixasTexto/falas/Scene9/fala8.png");
    this.load.image("fala99", "assets/caixasTexto/falas/Scene9/fala9.png");
    this.load.image("fala109", "assets/caixasTexto/falas/Scene9/fala10.png");
    this.load.image("fala119", "assets/caixasTexto/falas/Scene9/fala11.png");
    this.load.image("fala129", "assets/caixasTexto/falas/Scene9/fala12.png");
  }

  create() {
    this.ruaOng = this.add.image(300, 200, "ruaOng1");
    //TECLA..........
    this.teclaEspaco = this.add.key("SPACE");
    //
    //
    //PERSONAGENS..........
    this.jogador = this.add.sprite(500, 267, "Klaus", 3);
    this.voluntario = this.add.sprite(650, 250, "Voluntario", 3);
    //
    //
    //ANIMAÇÕES..........
    this.anims.create("andarEsquerdaV", "Voluntario", 0, 2, 10);
    this.anims.create("frenteV", "Voluntario", 3);
    this.anims.create("costasV", "Voluntario", 4);
    this.anims.create("andarEsquerdaK", "Klaus", 0, 2, 10);
    this.anims.create("frenteK", "Klaus", 3);
    this.anims.create("costasK", "Klaus", 4);
    //
    //
    //FALAS..........
    this.fala19 = this.add.image(300, 330, "fala19");
    this.fala19.setVisible(true);
    this.fala29 = this.add.image(300, 330, "fala29");
    this.fala29.setVisible(false);
    this.fala39 = this.add.image(300, 330, "fala39");
    this.fala39.setVisible(false);
    this.fala49 = this.add.image(300, 330, "fala49");
    this.fala49.setVisible(false);
    this.fala59 = this.add.image(300, 330, "fala59");
    this.fala59.setVisible(false);
    this.fala69 = this.add.image(300, 330, "fala69");
    this.fala69.setVisible(false);
    this.fala79 = this.add.image(300, 330, "fala79");
    this.fala79.setVisible(false);
    this.fala89 = this.add.image(300, 330, "fala89");
    this.fala89.setVisible(false);
    this.fala99 = this.add.image(300, 330, "fala99");
    this.fala99.setVisible(false);
    this.fala109 = this.add.image(300, 330, "fala109");
    this.fala109.setVisible(false);
    this.fala119 = this.add.image(300, 330, "fala119");
    this.fala119.setVisible(false);
    this.fala129 = this.add.image(300, 330, "fala129");
    this.fala129.setVisible(false);

 this.debug = this.add.key("P");
  }

  update() {
    if (this.debug.wasPressed()) {
      this.scene.start("Scene10");
    }
    let animV = "frenteV";
    let animK = "frenteK";

    //CONTINUIDADE DA HISTÓRIA.........
    if (this.teclaEspaco.wasPressed()) {
      this.dialogo += 1;
    }

    switch (this.dialogo) {
      case 1:
        this.fala19.setVisible(false);
        this.fala29.setVisible(true);
        if (this.voluntario.x >= 550) {
          this.voluntario.x -= 3;
          animV = "andarEsquerdaV";
        }
        break;

      case 2:
        this.fala29.setVisible(false);
        this.fala39.setVisible(true);
        break;

      case 3:
        this.fala39.setVisible(false);
        this.fala49.setVisible(true);
        break;

      case 4:
        this.fala49.setVisible(false);
        this.fala59.setVisible(true);
        break;

      case 5:
        this.fala59.setVisible(false);
        this.fala69.setVisible(true);
        break;

      case 6:
        this.fala69.setVisible(false);
        this.fala79.setVisible(true);
        break;

      case 7:
        this.fala79.setVisible(false);
        this.fala89.setVisible(true);
        break;

      case 8:
        this.fala89.setVisible(false);
        this.fala99.setVisible(true);
        break;

      case 9:
        this.fala99.setVisible(false);
        this.fala109.setVisible(true);
        break;

      case 10:
        this.fala109.setVisible(false);
        this.fala119.setVisible(true);
        break;

      case 11:
        this.fala119.setVisible(false);
        this.fala129.setVisible(true);
        break;

      case 12:
        this.fala129.setVisible(false);
        if (this.voluntario.x >= 150) {
          this.voluntario.x -= 3;
          this.jogador.x -= 3;
          animV = "andarEsquerdaV";
          animK = "andarEsquerdaK";
        }
        if (this.voluntario.x <= 150) {
          this.jogador.play("costasK");
          this.voluntario.play("costasV");
          this.scene.start("Scene10");
        }
        break;
    }

    if(this.dialogo > 12){
       this.scene.start("Scene10");
    }

    this.voluntario.play(animV, true);
    this.jogador.play(animK, true);
  }
}