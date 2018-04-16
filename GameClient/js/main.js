var game = new Phaser.Game(1200, 700, Phaser.AUTO, 'phaser');
//start button
var button;
var cardscale = 0.2;
var cardDistance = 160;
var game25;
var playerNumber = 0;
var cpuNumber = 1;
var deck;
var trump;
var placeHolder1,placeHolder2,placeHolder3;
var crds;
var cpuCrds;
//var playersSelectedCard;
var selectedCardArray={};

//Array of card sprites
var playerCardArray={};
var cpuCardArray={};
//Html Textarea
var gameText;

var GameState = {
  preload: function() {
    //loads Images
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
    deck.inputEnabled = false;
    deck.visible = false;

    placeHolder1 = this.game.add.sprite(game.world.centerX-180,game.world.centerY-80,'cardPlaceholder');
    placeHolder1.scale.setTo(cardscale,cardscale);
    placeHolder1.visible = false;

    placeHolder2 = this.game.add.sprite(game.world.centerX-50,game.world.centerY-80,'cardPlaceholder');
    placeHolder2.scale.setTo(cardscale,cardscale);
    placeHolder2.visible = false;

    placeHolder3 = this.game.add.sprite(game.world.centerX-50,game.world.centerY-80,'cardPlaceholder');
    placeHolder3.scale.setTo(cardscale,cardscale);
    placeHolder3.visible = false;
  },
  update:function(){
  }

};

game.state.add('GameState',GameState);
game.state.start('GameState');

function start () {
  button.visible =false;
  deck.visible = true;
  
  //create new game //Two Player game with one CPU
  game25 = new Game(2,cpuNumber);

  //get PlayerNumber
  playerNumber=0;

  //Allow deck flip
  if(game25.getPlayerMove()==playerNumber){
    deck.inputEnabled = true;
    deck.events.onInputDown.add(flipTrump, this);
  }

  //load textarea
  gameText = document.getElementById('gameText');
  displayText("Welcome to Twenty Five Online");

  //get cards from server //TODO

  if(game25.getPlayerMove()==playerNumber){
    displayText("Flip over Trump card");
  }
  
}//start

function displayText(txt){
  gameText.innerHTML +="[GAME]"+txt+"\n";
  gameText.scrollTop = gameText.scrollHeight;
}//displayText

function displayScore(txt){
  gameText.innerHTML +="[SCORE]"+txt+"\n";
  gameText.scrollTop = gameText.scrollHeight;
}//displayScore

function flipTrump () {
  //assign trump
  trump = game25.getRound().getTrump();//START HERE

  //place trump at top of deck
  deck.visible=false;

  placeHolder3 = this.game.add.sprite(1080,game.world.centerY-80,trump.getImageName());
  placeHolder3.scale.setTo(cardscale,cardscale);
  placeHolder3.events.onInputDown.add(displayTrump, this);
  placeHolder3.inputEnabled = true;

  //Deals cards to players and displayes to the screen
  deal();
}//flipTrump

function deal() {
  placeHolder1.visible = true;
  placeHolder2.visible = true;

  //get players hand
  crds= game25.getHand(playerNumber).getCards();
  cpuCrds=game25.getHand(cpuNumber).getCards();

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
}//deal

function displayTrump(){
 displayText(trump.getFullName()+" is the trump card");
 checkForMove();
}

function enableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = true;
      playerCardArray[i].events.onInputDown.add(cardPressed,this);
  } 
}//enableInput

function disableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = false;
  } 
}//disableInput

function checkForMove(){
  //check 
  if(Object.keys(selectedCardArray).length==2){
    //computeWinner
    var winningCard = game25.getRound().decideWinningCard(selectedCardArray);

    winningPlayer=(returnWinnerIndex(winningCard));

    //add score 
    game25.increaseScore(winningPlayer);
    displayScore(game25.getScores());

    //set winner to play next
    game25.setPlayerMove(winningPlayer);

    //empty array
    selectedCardArray={};
  }

  checkForWinner();
  
  if(game25.getPlayerMove()==playerNumber){
    //enables card pressed methods
    enableInput();
  }
  else{
    //computers move
    cpuMove(game25.getPlayerMove());
    
  }
}//checkForMove

function checkForWinner(){
  var isWinner;
  //round over //maybe have to increase for larger games 
  if(game25.getTotalScore()==25||game25.getTotalScore()==50||game25.getTotalScore()==75||game25.getTotalScore()==100){
    //check if winner
    if(game25.checkForWinner()){
      //display winner
      displayText("Player "+(game25.getWinner()+1)+" is the Winner");
    }
    else{
      console.log("no winner new round");
      //new round TODO  

    }
  }
  return isWinner;
}

function returnWinnerIndex(winCrd) {
  var index;
  for (var i = 0; i < Object.keys(selectedCardArray).length; i++) {
    if(selectedCardArray[i]==winCrd){
      index=i;
    }
  } 
  return index;
}

function cardPressed(crd) {
  disableInput();
  crd.visible =false;
  var tempCrd;

  //set selected Card and pass move to next player in game
  game25.incrementMove();

  //get a hold of card object
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
    if(crds[i].getImageName()==crd.key){
      tempCrd = crds[i];
    }
  }//for 

  displayText("You played "+ tempCrd.getFullName());

  selectedCardArray[playerNumber]=tempCrd;

  //move selected card to center
  placeHolder1 = this.game.add.sprite(game.world.centerX-180,game.world.centerY-80,crd.key);
  placeHolder1.scale.setTo(cardscale,cardscale);

  checkForMove();
}//cardPressed



function cpuMove (cpuNumber) {
  var plyrs = game25.getPlayers();
  var tempCards = plyrs[cpuNumber].getHand().getCards();

  //pick a random cpu card from cpu hand (not implemented yet)

  //var randIndex = Math.floor((Math.random() * Object.keys(tempCards).length) + 1);
  var randIndex = (Object.keys(tempCards).length - 1);

  var crd  = cpuCardArray[randIndex];
  crd.visible = false;

  var tempCrd=tempCards[randIndex];

  displayText("CPU played "+ tempCrd.getFullName());

  selectedCardArray[cpuNumber]=tempCrd;

  //remove card from computer card
  plyrs[cpuNumber].removeFromHand(tempCrd);

  //move selected card to center
  placeHolder2 = this.game.add.sprite(game.world.centerX-50,game.world.centerY-80,tempCrd.getImageName());
  placeHolder2.scale.setTo(cardscale,cardscale);

  //set selected Card and pass move to next player in game
  game25.incrementMove();

  checkForMove();
}//cpuMove