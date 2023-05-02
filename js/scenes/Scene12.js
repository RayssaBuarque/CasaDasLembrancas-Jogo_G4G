//FIM DO FLASHBACK

class Scene12 extends SimpleScene {
  constructor() {
    super("Scene12");
  }

  init() {

  }

  preload() {
    //CENÁRIO..........
    this.load.image("Rua1", "assets/cenarios/final.png");
    this.load.image("Rua2", "assets/cenarios/final2.png");


    //PERSONAGENS..........
    this.load.imageset("caminhao", "assets/cenarios/detalhes/caminhao.png", 573, 450);
  }

  create() {
    //CENARIOS..........
    this.fundo = this.add.image(960, 200, "Rua1");
    this.fundoInvertido = this.add.image(2880, 200, "Rua2");
    this.caminhao = this.add.sprite(300, 225, "caminhao", 1);
    this.caminhao.setScale(0.7);

    //ANIMAÇÕES..........
    this.anims.create("caminhaum", "caminhao", 0, 5, 10);
    //this.drawGrid;
  }

  update() {
    let anims = "caminhaum";

    this.fundo.x -= 2.5;
    this.fundoInvertido.x -= 2.5;

    if (this.fundo.x == -960) {
      this.fundo.x += 3840;
    }
    if (this.fundoInvertido.x == -960) {
      this.fundoInvertido.x += 3840;
    }

    this.caminhao.play(anims, "caminhaum");
  }
}