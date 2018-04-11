var game = new Phaser.Game(1200,700,Phaser.AUTO);
var button;
var cardscale = 0.2;
var cardDistance = 160;

var game25;
var playerNumber = 0;
var deck;
var placeHolder1;
var placeHolder2;
var playersSelectedCard;

var playerCardArray={};
var cpuCardArray={};

var GameState = {
  preload: function() {
    this.load.image('cardBack','assets/images/cards/backOfCard.png');
    this.load.image('cardPlaceholder','assets/images/cards/cardPlaceholder.png');
    this.load.image('button','assets/images/button.png');

  //Clubs
    this.load.image('ace_of_clubs','assets/images/cards/ace_of_clubs.png');
    this.load.image('2_of_clubs','assets/images/cards/2_of_clubs.png');
    this.load.image('3_of_clubs','assets/images/cards/3_of_clubs.png');
    this.load.image('4_of_clubs','assets/images/cards/4_of_clubs.png');
    this.load.image('5_of_clubs','assets/images/cards/5_of_clubs.png');
    this.load.image('6_of_clubs','assets/images/cards/6_of_clubs.png');
    this.load.image('7_of_clubs','assets/images/cards/7_of_clubs.png');
    this.load.image('8_of_clubs','assets/images/cards/8_of_clubs.png');
    this.load.image('9_of_clubs','assets/images/cards/9_of_clubs.png');
    this.load.image('10_of_clubs','assets/images/cards/10_of_clubs.png');
    this.load.image('jack_of_clubs','assets/images/cards/jack_of_clubs.png');
    this.load.image('queen_of_clubs','assets/images/cards/queen_of_clubs.png');
    this.load.image('king_of_clubs','assets/images/cards/king_of_clubs.png');
  //Hearts
    this.load.image('ace_of_hearts','assets/images/cards/ace_of_hearts.png');
    this.load.image('2_of_hearts','assets/images/cards/2_of_hearts.png');
    this.load.image('3_of_hearts','assets/images/cards/3_of_hearts.png');
    this.load.image('4_of_hearts','assets/images/cards/4_of_hearts.png');
    this.load.image('5_of_hearts','assets/images/cards/5_of_hearts.png');
    this.load.image('6_of_hearts','assets/images/cards/6_of_hearts.png');
    this.load.image('7_of_hearts','assets/images/cards/7_of_hearts.png');
    this.load.image('8_of_hearts','assets/images/cards/8_of_hearts.png');
    this.load.image('9_of_hearts','assets/images/cards/9_of_hearts.png');
    this.load.image('10_of_hearts','assets/images/cards/10_of_hearts.png');
    this.load.image('jack_of_hearts','assets/images/cards/jack_of_hearts.png');
    this.load.image('queen_of_hearts','assets/images/cards/queen_of_hearts.png');
    this.load.image('king_of_hearts','assets/images/cards/king_of_hearts.png');
  //Spades
    this.load.image('ace_of_spades','assets/images/cards/ace_of_spades.png');
    this.load.image('2_of_spades','assets/images/cards/2_of_spades.png');
    this.load.image('3_of_spades','assets/images/cards/3_of_spades.png');
    this.load.image('4_of_spades','assets/images/cards/4_of_spades.png');
    this.load.image('5_of_spades','assets/images/cards/5_of_spades.png');
    this.load.image('6_of_spades','assets/images/cards/6_of_spades.png');
    this.load.image('7_of_spades','assets/images/cards/7_of_spades.png');
    this.load.image('8_of_spades','assets/images/cards/8_of_spades.png');
    this.load.image('9_of_spades','assets/images/cards/9_of_spades.png');
    this.load.image('10_of_spades','assets/images/cards/10_of_spades.png');
    this.load.image('jack_of_spades','assets/images/cards/jack_of_spades.png');
    this.load.image('queen_of_spades','assets/images/cards/queen_of_spades.png');
    this.load.image('king_of_spades','assets/images/cards/king_of_spades.png');
  //Diamonds
    this.load.image('ace_of_diamonds','assets/images/cards/ace_of_diamonds.png');
    this.load.image('2_of_diamonds','assets/images/cards/2_of_diamonds.png');
    this.load.image('3_of_diamonds','assets/images/cards/3_of_diamonds.png');
    this.load.image('4_of_diamonds','assets/images/cards/4_of_diamonds.png');
    this.load.image('5_of_diamonds','assets/images/cards/5_of_diamonds.png');
    this.load.image('6_of_diamonds','assets/images/cards/6_of_diamonds.png');
    this.load.image('7_of_diamonds','assets/images/cards/7_of_diamonds.png');
    this.load.image('8_of_diamonds','assets/images/cards/8_of_diamonds.png');
    this.load.image('9_of_diamonds','assets/images/cards/9_of_diamonds.png');
    this.load.image('10_of_diamonds','assets/images/cards/10_of_diamonds.png');
    this.load.image('jack_of_diamonds','assets/images/cards/jack_of_diamonds.png');
    this.load.image('queen_of_diamonds','assets/images/cards/queen_of_diamonds.png');
    this.load.image('king_of_diamonds','assets/images/cards/king_of_diamonds.png');
  },
  create:function(){
    game.stage.backgroundColor = "#17b52f";
    //start button
    button = game.add.button(game.world.centerX-70, game.world.centerY, 'button', start, this, 2, 1, 0);
    button.scale.setTo(0.5,0.5);

    //deck
    deck = this.game.add.sprite(1080,game.world.centerY-80,'cardBack');
    deck.scale.setTo(cardscale,cardscale);
    deck.inputEnabled = true;
    deck.events.onInputDown.add(flipTrump, this);
    deck.visible = false;

    placeHolder1 = this.game.add.sprite(game.world.centerX-180,game.world.centerY-80,'cardPlaceholder');
    placeHolder1.scale.setTo(cardscale,cardscale);
    placeHolder1.visible = false;

    placeHolder2 = this.game.add.sprite(game.world.centerX-50,game.world.centerY-80,'cardPlaceholder');
    placeHolder2.scale.setTo(cardscale,cardscale);
    placeHolder2.visible = false;
  },
  update:function(){
  }

};

game.state.add('GameState',GameState);
game.state.start('GameState');

function start () {
  button.visible =false;
  deck.visible = true;
  
  //create new game 
  game25 = new Game(2);

  //get PlayerNumber
  playerNumber=0;

  //get cards from server //TODO
}

function flipTrump () {
  //assign trump
  var trump = game25.getRound().getTrump();//START HERE

  //place trump at top of deck //TODO

  //Deals cards to players and displayes to the screen
  deal();
}

function enableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = true;
      playerCardArray[i].events.onInputDown.add(cardPressed,this);
  } 
}

function disableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = false;
  } 
}
function checkForMove(){
  if(game25.getPlayerMove()==playerNumber){
    //enables card pressed methods
    enableInput();
  }
}

function cardPressed(crd) {
  disableInput();

  crd.visible =false;

  //move selected card to center
  placeHolder1 = this.game.add.sprite(game.world.centerX-180,game.world.centerY-80,crd.key);
  placeHolder1.scale.setTo(cardscale,cardscale);
}

function deal() {
  placeHolder1.visible = true;
  placeHolder2.visible = true;

  //get players hand
  crds= game25.getHand(playerNumber).getCards();

  playerCardArray[0]=this.game.add.sprite(cardDistance*1,500,crds[0].getImageName());
  playerCardArray[0].scale.setTo(cardscale,cardscale);
  playerCardArray[1]=this.game.add.sprite(cardDistance*2,500,crds[1].getImageName());
  playerCardArray[1].scale.setTo(cardscale,cardscale);
  playerCardArray[2]=this.game.add.sprite(cardDistance*3,500,crds[2].getImageName());
  playerCardArray[2].scale.setTo(cardscale,cardscale);
  playerCardArray[3]=this.game.add.sprite(cardDistance*4,500,crds[3].getImageName());
  playerCardArray[3].scale.setTo(cardscale,cardscale);
  playerCardArray[4]=this.game.add.sprite(cardDistance*5,500,crds[4].getImageName());
  playerCardArray[4].scale.setTo(cardscale,cardscale);

  cpuCardArray[0]=this.game.add.sprite(cardDistance*1,50,'cardBack');
  cpuCardArray[0].scale.setTo(cardscale,cardscale);
  cpuCardArray[1]=this.game.add.sprite(cardDistance*2,50,'cardBack');
  cpuCardArray[1].scale.setTo(cardscale,cardscale);
  cpuCardArray[2]=this.game.add.sprite(cardDistance*3,50,'cardBack');
  cpuCardArray[2].scale.setTo(cardscale,cardscale);
  cpuCardArray[3]=this.game.add.sprite(cardDistance*4,50,'cardBack');
  cpuCardArray[3].scale.setTo(cardscale,cardscale);
  cpuCardArray[4]=this.game.add.sprite(cardDistance*5,50,'cardBack');
  cpuCardArray[4].scale.setTo(cardscale,cardscale);

  checkForMove();
}
