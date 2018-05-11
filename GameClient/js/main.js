var game = new Phaser.Game((window.innerWidth * window.devicePixelRatio)-(window.innerWidth/10), (window.innerHeight * window.devicePixelRatio)-(window.innerHeight/3), Phaser.AUTO, 'phaser');
var button;
var cardscale;
var cardDistance;
var cardHeight,cardHeightCpu;
var game25;
var playerNumber;
var cpus={};
var deck;
var trump;
var placeHolder1,placeHolder2,placeHolder3,placeHolder4,miniPlaceHolder1,miniPlaceHolder2;
var crds;
var cpuCrds;
var selectedCardArray={};
//Array of card sprites
var playerCardArray={};
var cpuCardArray={};
//Html Textarea
var gameText;
//group of playersHand
var playerHand,cpuHand;
var gameHeight,gameWidth;
var loadingText;

var GameState = {
  preload: function() {
    //loading screen
    var text = "Loading game";
    var style = { font: "65px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    this.loadingText = game.add.text(game.world.centerX, game.world.centerY, text, style);
    this.loadingText.anchor.setTo(0.5);
    game.stage.backgroundColor = "#17b52f";

    //loads Images
    this.load.image('cardBack','../assets/images/cards/backOfCard.png');
    this.load.image('cardPlaceholder','../assets/images/cards/cardPlaceholder.png');
    this.load.image('button','../assets/images/button.png');
    this.load.image('restartButton','../assets/images/restartButton.png');

    //message dialog
    this.load.image("boxBack", "../assets/images/boxBack.png");
    this.load.image("closeButton", "../assets/images/closeButton.png");
    this.load.image("yesButton", "../assets/images/yes.png");
    this.load.image("noButton", "../assets/images/no.png");

    //Clubs
    this.load.image('ace_of_clubs','../assets/images/cards/ace_of_clubs.png');
    this.load.image('2_of_clubs','../assets/images/cards/2_of_clubs.png');
    this.load.image('3_of_clubs','../assets/images/cards/3_of_clubs.png');
    this.load.image('4_of_clubs','../assets/images/cards/4_of_clubs.png');
    this.load.image('5_of_clubs','../assets/images/cards/5_of_clubs.png');
    this.load.image('6_of_clubs','../assets/images/cards/6_of_clubs.png');
    this.load.image('7_of_clubs','../assets/images/cards/7_of_clubs.png');
    this.load.image('8_of_clubs','../assets/images/cards/8_of_clubs.png');
    this.load.image('9_of_clubs','../assets/images/cards/9_of_clubs.png');
    this.load.image('10_of_clubs','../assets/images/cards/10_of_clubs.png');
    this.load.image('jack_of_clubs','../assets/images/cards/jack_of_clubs.png');
    this.load.image('queen_of_clubs','../assets/images/cards/queen_of_clubs.png');
    this.load.image('king_of_clubs','../assets/images/cards/king_of_clubs.png');
    //Hearts
    this.load.image('ace_of_hearts','../assets/images/cards/ace_of_hearts.png');
    this.load.image('2_of_hearts','../assets/images/cards/2_of_hearts.png');
    this.load.image('3_of_hearts','../assets/images/cards/3_of_hearts.png');
    this.load.image('4_of_hearts','../assets/images/cards/4_of_hearts.png');
    this.load.image('5_of_hearts','../assets/images/cards/5_of_hearts.png');
    this.load.image('6_of_hearts','../assets/images/cards/6_of_hearts.png');
    this.load.image('7_of_hearts','../assets/images/cards/7_of_hearts.png');
    this.load.image('8_of_hearts','../assets/images/cards/8_of_hearts.png');
    this.load.image('9_of_hearts','../assets/images/cards/9_of_hearts.png');
    this.load.image('10_of_hearts','../assets/images/cards/10_of_hearts.png');
    this.load.image('jack_of_hearts','../assets/images/cards/jack_of_hearts.png');
    this.load.image('queen_of_hearts','../assets/images/cards/queen_of_hearts.png');
    this.load.image('king_of_hearts','../assets/images/cards/king_of_hearts.png');
    //Spades
    this.load.image('ace_of_spades','../assets/images/cards/ace_of_spades.png');
    this.load.image('2_of_spades','../assets/images/cards/2_of_spades.png');
    this.load.image('3_of_spades','../assets/images/cards/3_of_spades.png');
    this.load.image('4_of_spades','../assets/images/cards/4_of_spades.png');
    this.load.image('5_of_spades','../assets/images/cards/5_of_spades.png');
    this.load.image('6_of_spades','../assets/images/cards/6_of_spades.png');
    this.load.image('7_of_spades','../assets/images/cards/7_of_spades.png');
    this.load.image('8_of_spades','../assets/images/cards/8_of_spades.png');
    this.load.image('9_of_spades','../assets/images/cards/9_of_spades.png');
    this.load.image('10_of_spades','../assets/images/cards/10_of_spades.png');
    this.load.image('jack_of_spades','../assets/images/cards/jack_of_spades.png');
    this.load.image('queen_of_spades','../assets/images/cards/queen_of_spades.png');
    this.load.image('king_of_spades','../assets/images/cards/king_of_spades.png');
    //Diamonds
    this.load.image('ace_of_diamonds','../assets/images/cards/ace_of_diamonds.png');
    this.load.image('2_of_diamonds','../assets/images/cards/2_of_diamonds.png');
    this.load.image('3_of_diamonds','../assets/images/cards/3_of_diamonds.png');
    this.load.image('4_of_diamonds','../assets/images/cards/4_of_diamonds.png');
    this.load.image('5_of_diamonds','../assets/images/cards/5_of_diamonds.png');
    this.load.image('6_of_diamonds','../assets/images/cards/6_of_diamonds.png');
    this.load.image('7_of_diamonds','../assets/images/cards/7_of_diamonds.png');
    this.load.image('8_of_diamonds','../assets/images/cards/8_of_diamonds.png');
    this.load.image('9_of_diamonds','../assets/images/cards/9_of_diamonds.png');
    this.load.image('10_of_diamonds','../assets/images/cards/10_of_diamonds.png');
    this.load.image('jack_of_diamonds','../assets/images/cards/jack_of_diamonds.png');
    this.load.image('queen_of_diamonds','../assets/images/cards/queen_of_diamonds.png');
    this.load.image('king_of_diamonds','../assets/images/cards/king_of_diamonds.png');
    //placeholder trumps
    this.load.image('hearts','../assets/images/cards/hearts.png');
    this.load.image('clubs','../assets/images/cards/clubs.png');
    this.load.image('spades','../assets/images/cards/spades.png');
    this.load.image('diamonds','../assets/images/cards/diamonds.png');
  },
  create:function(){
    //set scalings such as height and width
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setMinMax(300, 100, 1500, 650);
    gameHeight=game.height;
    gameWidth=game.width;
    cardDistance = gameWidth/7;
    cardscale = 0.18;
    cardHeight = game.world.centerY+gameHeight/4.5;
    cardHeightCpu = game.world.centerY-gameHeight/2;

    game.stage.backgroundColor = "#17b52f";
    this.loadingText.visible=false;
    //start button
    button = game.add.button(game.world.centerX, game.world.centerY, 'button', start, this, 2, 1, 0);
    button.x-=button.width/4;
    button.scale.setTo(0.5,0.5);

    //deck
    deck = this.game.add.sprite(game.world.centerX+gameWidth/4,game.world.centerY-gameHeight/12,'cardBack');
    deck.scale.setTo(cardscale,cardscale);
    deck.inputEnabled = false;
    deck.visible = false;

    placeHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/8,game.world.centerY-gameHeight/12,'cardPlaceholder');
    placeHolder1.scale.setTo(cardscale,cardscale);
    placeHolder1.visible = false;

    placeHolder2 = this.game.add.sprite(game.world.centerX-gameWidth/50,game.world.centerY-gameHeight/12,'cardPlaceholder');
    placeHolder2.scale.setTo(cardscale,cardscale);
    placeHolder2.visible = false;

    //get player number
    playerNumber = 0;
  },
  update:function(){
  },
};

game.state.add('GameState',GameState);
game.state.start('GameState');

function start () {
  button.visible =false;
  deck.visible = true;

  //create new game //Two Player game with one CPU
  game25 = new Game(2,1);
  //get PlayerNumber
  playerNumber=0;
  cpus[0]=1;

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

function restart(){
  game.state.start('GameState');
}//restart

function newRound () {
  removeAll();
  //newRound
  game25.newRound();
  setupCards();

  //Allow deck flip
  if(game25.getPlayerMove()==playerNumber){
    deck.inputEnabled = true;
    deck.events.onInputDown.add(flipTrump, this);
  }

  //load textarea
  gameText = document.getElementById('gameText');
  displayText("NEW ROUND");
  displayScore();

  //get cards from server //TODO
  if(game25.getPlayerMove()==playerNumber){
    displayText("Flip over Trump card");
  }
  else{
    //cpu turn over Trump
    flipTrump();
  }
}//start

function setupCards(){
  //deck
  deck = this.game.add.sprite(game.world.centerX+gameWidth/4,game.world.centerY-gameHeight/12,'cardBack');
  deck.scale.setTo(cardscale,cardscale);
  deck.inputEnabled = false;
  deck.visible = true;

  placeHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/8,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder1.scale.setTo(cardscale,cardscale);
  placeHolder1.visible = false;

  placeHolder2 = this.game.add.sprite(game.world.centerX-gameWidth/50,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder2.scale.setTo(cardscale,cardscale);
  placeHolder2.visible = false;

  placeHolder3 = this.game.add.sprite(game.world.centerX+gameWidth/4,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder3.scale.setTo(cardscale,cardscale);
  placeHolder3.visible = false;
}//setupCards

function displayText(txt){
  gameText.innerHTML +="[GAME]"+txt+"\n";
  gameText.scrollTop = gameText.scrollHeight;
}//displayText

function displayScore(){
  gameText.innerHTML +="[SCORE]"+game25.getScores()+"\n";
  gameText.scrollTop = gameText.scrollHeight;
}//displayScore

function flipTrump () {
  //assign trump
  trump = game25.getRound().getTrump();

  //place trump at top of deck
  deck.visible=false;
  deck.inputEnabled = false;

  placeHolder3 = this.game.add.sprite(game.world.centerX+gameWidth/4,game.world.centerY-gameHeight/12,trump.getImageName());
  placeHolder3.scale.setTo(cardscale,cardscale);
  placeHolder3.events.onInputDown.add(displayTrump, this);
  placeHolder3.inputEnabled = true;

  //Deals cards to players and displayes to the screen
  deal();

  if(game25.getPlayerMove()==playerNumber){
    //check if top card can be robbed
    robCheck();
  }
}//flipTrump

function deal() {
  if (this.playerHand) {
    this.playerHand.destroy();
  }

  if (this.cpuHand) {
    this.cpuHand.destroy();
  }

  playerHand = game.add.group();
  cpuHand = game.add.group();

  placeHolder1.visible = true;
  placeHolder2.visible = true;

  //get players hand
  crds= game25.getHand(playerNumber).getCards();
  cpuCrds=game25.getHand(cpus[0]).getCards();

  playerCardArray[0]=this.game.add.sprite(cardDistance*1,cardHeight,crds[0].getImageName());
  playerCardArray[0].scale.setTo(cardscale,cardscale);
  playerCardArray[1]=this.game.add.sprite(cardDistance*2,cardHeight,crds[1].getImageName());
  playerCardArray[1].scale.setTo(cardscale,cardscale);
  playerCardArray[2]=this.game.add.sprite(cardDistance*3,cardHeight,crds[2].getImageName());
  playerCardArray[2].scale.setTo(cardscale,cardscale);
  playerCardArray[3]=this.game.add.sprite(cardDistance*4,cardHeight,crds[3].getImageName());
  playerCardArray[3].scale.setTo(cardscale,cardscale);
  playerCardArray[4]=this.game.add.sprite(cardDistance*5,cardHeight,crds[4].getImageName());
  playerCardArray[4].scale.setTo(cardscale,cardscale);

  cpuCardArray[0]=this.game.add.sprite(cardDistance*1,cardHeightCpu,'cardBack');
  cpuCardArray[0].scale.setTo(cardscale,cardscale);
  cpuCardArray[1]=this.game.add.sprite(cardDistance*2,cardHeightCpu,'cardBack');
  cpuCardArray[1].scale.setTo(cardscale,cardscale);
  cpuCardArray[2]=this.game.add.sprite(cardDistance*3,cardHeightCpu,'cardBack');
  cpuCardArray[2].scale.setTo(cardscale,cardscale);
  cpuCardArray[3]=this.game.add.sprite(cardDistance*4,cardHeightCpu,'cardBack');
  cpuCardArray[3].scale.setTo(cardscale,cardscale);
  cpuCardArray[4]=this.game.add.sprite(cardDistance*5,cardHeightCpu,'cardBack');
  cpuCardArray[4].scale.setTo(cardscale,cardscale);

  //add players hand to a group
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
    playerHand.add(playerCardArray[i]);
  }

  for (i = 0; i < Object.keys(cpuCardArray).length; i++) {
    cpuHand.add(cpuCardArray[i]);
  }
}//deal

function resetPlaceholders(){
  miniPlaceHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/10.5,game.world.centerY-gameHeight/4.5,placeHolder1.key);
  miniPlaceHolder1.scale.setTo(cardscale/2,cardscale/2);
  miniPlaceHolder1.visible = true;

  miniPlaceHolder2 = this.game.add.sprite(game.world.centerX+gameWidth/300,game.world.centerY-gameHeight/4.5,placeHolder2.key);
  miniPlaceHolder2.scale.setTo(cardscale/2,cardscale/2);
  miniPlaceHolder2.visible = true;

  placeHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/8,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder1.scale.setTo(cardscale,cardscale);
  placeHolder1.visible = true;

  placeHolder2 = this.game.add.sprite(game.world.centerX-gameWidth/50,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder2.scale.setTo(cardscale,cardscale);
  placeHolder2.visible = true;
}

function displayTrump(){
 displayText(trump.getFullName()+" is the trump card");
 checkForMove();
}//displayTrump

function enableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = true;
      playerCardArray[i].events.onInputDown.add(cardPressed,this);
  } 
}//enableInput

function disableInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].inputEnabled = false;

      try {
        playerHand.children[i].input.enabled = false;
        playerHand.children[i].inputEnabled = false;
      } catch (error) {
      }
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
    displayScore();

    //set winner to play next
    game25.setPlayerMove(winningPlayer);

    //empty array
    selectedCardArray={};

    resetPlaceholders();
  }

  //check if gameover
  checkForRoundover();
  checkForWinner();
  
  if(game25.getPlayerMove()==playerNumber){
    //enables card pressed methods
    enableInput();
  }
  else{
    //computers move
    cpuMove(game25.getPlayerMove());
  }

  if(game25.getPlayerMove()==playerNumber&&game25.round.getRobChecked()==false){
    //check if top card can be robbed
    robCheck();
  }
}//checkForMove

function checkForWinner(){
  //var isWinner;
  if(game25.checkForWinner()){
    //display winner
    gameOver();
  }
  else{
    //round over //maybe have to increase for larger games 
    if(game25.getTotalScore()==25&&game25.getRound().getRoundCount()==1||
    game25.getTotalScore()==50&&game25.getRound().getRoundCount()==2||
    game25.getTotalScore()==75&&game25.getRound().getRoundCount()==3||
    game25.getTotalScore()==100&&game25.getRound().getRoundCount()==4){
      //check if winner
      if(game25.checkForWinner()){
        gameOver();
      }
      else{
        //new round  
        newRound();
      }
    }
  }
  //return isWinner;
}//checkForWinner

function checkForRoundover(){
  var isRoundover=false;
  //round over //maybe have to increase for larger games 
  if(game25.getTotalScore()==25||game25.getTotalScore()==50||game25.getTotalScore()==75||game25.getTotalScore()==100){
      isRoundover=true;
      checkForWinner();
  }
  else{
    isRoundover=false;
  } 
  return isRoundover;
}//checkForRoundover

function returnWinnerIndex(winCrd) {
  var index;
  for (var i = 0; i < Object.keys(selectedCardArray).length; i++) {
    if(selectedCardArray[i]==winCrd){
      index=i;
    }
  } 
  return index;
}//returnWinnerIndex

function cardPressed(crd) {
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
  placeHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/8,game.world.centerY-gameHeight/12,crd.key);
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
  placeHolder2 = this.game.add.sprite(game.world.centerX-gameWidth/50,game.world.centerY-gameHeight/12,tempCrd.getImageName());
  placeHolder2.scale.setTo(cardscale,cardscale);

  //set selected Card and pass move to next player in game
  game25.incrementMove();

  checkForMove();
}//cpuMove

function robCheck() {
  var notRobbable=true;
  //check if player has been asked to rob
  if(game25.round.getRobChecked()){}
  else{
    //if player has ace in hand ask if hand to rob
    var plyrs=game25.getPlayers();
    var playerCards = plyrs[playerNumber].getHand().getCards();

    for (var i = 0; i < Object.keys(playerCards).length; i++) {
      if(playerCards[i].getName()=="ace"&&playerCards[i].getSuit()==trump.getSuit()){
        notRobbable=false;
        disableInput();
        //dialog ask if want to rob
        robMessageBox();
      }
    }//for

    //if dealer turns up trump ace ask if want to rob
    if(trump.getName()=="ace"&&game25.getPlayerMove()==playerNumber){
      notRobbable=false;
      disableInput();
      robMessageBox();
    }
    game25.round.setRobChecked();
  } 

  if(notRobbable){
    checkForMove();
  }
}//robCheck

function removeAll() {
  game.world.removeAll();
  playerHand.removeChildren();
  cpuHand.removeChildren();
}//removeAll

function robMessageBox() {
  this.showRobMessageBox("Do you want to rob the trump card!");
  displayText("Do you want to rob the trump card!");
}//robMessageBox

function showRobMessageBox(text) {
  var w=gameWidth/5,h=gameHeight/6;
  //just in case the message box already exists destroy it
  if (this.msgBox) {
      this.msgBox.destroy();
  }
  //make a group to hold all the elements
  var msgBox = game.add.group();
  //make the back of the message box
  var back = game.add.sprite(0, 0, "boxBack");
  var yesButton = game.add.sprite(w/8, h/1.5, "yesButton");
  var noButton = game.add.sprite(w/1.7, h/1.5, "noButton");
  yesButton.scale.setTo(0.3,0.3);
  noButton.scale.setTo(0.3,0.3);

  //make a text field
  var text1 = game.add.text(0, 0, text);
  text1.wordWrap = true;
  text1.wordWrapWidth = w * 0.9;
  text1.fontSize=20;
  
  //set the width and height 
  back.width = w;
  back.height = h;

  //add the elements to the group
  msgBox.add(back);
  msgBox.add(yesButton);
  msgBox.add(noButton);
  msgBox.add(text1);

  //enable the button for input
  yesButton.inputEnabled = true;
  //add a listener to destroy the box when the button is pressed
  yesButton.events.onInputDown.add(this.yesRobClick, this);

  //enable the button for input
  noButton.inputEnabled = true;
  //add a listener to destroy the box when the button is pressed
  noButton.events.onInputDown.add(this.noRobClick, this);

  //set the message box in the center of the screen
  msgBox.x = (gameWidth / 5.5 - msgBox.width / 2);
  msgBox.y = gameHeight / 2 - msgBox.height / 2;
  
  //set the text in the middle of the message box
  text1.x = back.width / 2 - text1.width / 2;
  text1.y = (back.height / 2 - text1.height / 1.2);

  //make a state reference to the messsage box
  this.msgBox = msgBox;
}//showRobMessageBox

function yesRobClick() {
  this.msgBox.destroy();
  //Select card to swap
  enableSwapInput();
  game25.round.setRobChecked();
}//swapCard

function noRobClick() {
  this.msgBox.destroy();
  checkForMove();
  game25.round.setRobChecked();
}//noRobClick

function swapCard(crd) {
  crd.visible =false;
  var tempCrd;

  //get a hold of card object
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
    if(crds[i].getImageName()==crd.key){
      tempCrd = crds[i];
    }
  }//for 

  game25.round.swapCard(playerNumber,tempCrd,trump);

  //replace trump with placeholder trump card
  placeHolder3 = this.game.add.sprite(game.world.centerX+gameWidth/4,game.world.centerY-gameHeight/15,trump.getSuit());
  placeHolder3.scale.setTo(cardscale,cardscale);
  placeHolder3.events.onInputDown.add(displayTrump, this);
  placeHolder3.inputEnabled = true;

  placeHolder4 = this.game.add.sprite(game.world.centerX+gameWidth/5.5,game.world.centerY-gameHeight/15,'cardBack');
  placeHolder4.scale.setTo(cardscale,cardscale);
  placeHolder4.visible = true;

  //remove hands
  playerHand.destroy();
  cpuHand.destroy();

  deal();

  checkForMove();
}//swapCard

function enableSwapInput(){
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
      playerCardArray[i].events.onInputDown.removeAll();
      playerCardArray[i].events.onInputDown.add(swapCard,this);
      playerCardArray[i].inputEnabled = true;
  } 
  displayText("Select card to swap");
}//enableSwapInput

function renegeCheck() {
  var reneged=false;

  //if oppo plays card first check that players selected card isnt reneging 

  //check that selected card matches suit // if doesnt check does player have matching suit reneged

  //allow renaging of ace, jack, 5 of trumps if not better one played

  //if reneged = true

  //dont allow card to be played and alert player

  return reneged;

}//renegeCheck

function gameOver(){
  //remove all sprites
  removeAll();

  if(!isNaN(game25.getWinner())){
    //display winner
    displayText("Player "+(game25.getWinner()+1)+" is the Winner");
  }

  //Display game over 
  var text = "Game Over";
  var style = { font: "65px Arial", fill: "#ff0044", boundsAlignH: "center", boundsAlignV: "middle" };

  text = game.add.text(game.world.centerX, game.world.centerY-(gameHeight/20), text, style);
  text.anchor.setTo(0.5);

  button = game.add.button((game.world.centerX)-(button.width/2), game.world.centerY+gameHeight/20, 'restartButton', restart, this, 2, 1, 0);
  button.scale.setTo(0.5,0.5);
}//gameOver