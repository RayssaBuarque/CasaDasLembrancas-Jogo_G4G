//Configurações do Game
let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: 0x000000,
  //Ordem das cenas do jogo
  //scene: [Scene01,Scene02,Scene03,Scene04,Scene05,Scene06,scene07,Scene08],
  scene:[Scene01,Scene02,Scene03,Scene04,Scene05,Scene06,Scene07,Scene08,Scene09,Scene10,Scene11,Scene12],
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  fontFamily: `arial`,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

//Objetos de data globais
let data = {
  //score: 0,
  //lives: 3,
  //health 100,
}


//Crie um jogo Phaser usando a configuração
const game = new Phaser.Game(config);