var game = new Phaser.Game((window.innerWidth * window.devicePixelRatio)-(window.innerWidth/5), (window.innerHeight * window.devicePixelRatio)-300, Phaser.AUTO, 'phaser');
//scaling options
var cardscale,cardDistance,cardHeight,cardHeightCpu,gameHeight,gameWidth;
//typescript game
var game25;
var playerNumber;
var cpus={};
//phaser sprites
var deck,trump,placeHolder1,placeHolder2,placeHolder3,placeHolder4,placeHolder5,miniPlaceHolder1,miniPlaceHolder2,miniPlaceHolder5,button,loadingText;
var crds,cpuCrds,cpu2Crds;
//array of played cards
var selectedCardArray={};
//Array of card sprites
var playerCardArray={};
var cpuCardArray={};
var cpu2CardArray={};
//Html Textarea
var gameText;
//group of playersHand
var playerHand,cpuHand,cpu2Hand;
//bool to check if mobile device is in portrait mode
var isPortrait;

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
    isPortrait=game.scale.isGamePortrait;
    game.scale.forceOrientation(true, false);
		game.scale.enterIncorrectOrientation.add(handleIncorrect);
    game.scale.leaveIncorrectOrientation.add(handleCorrect);
    gameHeight=game.height;
    gameWidth=game.width;

    if(this.game.device.desktop){
      //scaling for desktop
      game.scale.setMinMax(300, 100, 1500, 650);
      cardDistance = gameWidth/7;
      cardscale = 0.18;
      cardHeight = game.world.centerY+gameHeight/4.5;
      cardHeightCpu = game.world.centerY-gameHeight/2.1;
    }//if

    else{
      //scaling for mobile
      game.scale.setMinMax(200, 100, 500, 250);
      cardDistance = gameWidth/7;
      cardscale = 0.3;
      cardHeight = game.world.centerY+gameHeight/4.5;
      cardHeightCpu = game.world.centerY-gameHeight/2.1;
    }

    game.stage.backgroundColor = "#17b52f";
    this.loadingText.visible=false;
    //start button
    button = game.add.button(game.world.centerX, game.world.centerY, 'button', start, this, 2, 1, 0);
    button.x-=button.width/4;
    button.scale.setTo(0.5,0.5);

    //deck
    deck = this.game.add.sprite(game.world.centerX+window.gameWidth/4,game.world.centerY-gameHeight/12,'cardBack');
    deck.scale.setTo(cardscale,cardscale);
    deck.inputEnabled = false;
    deck.visible = false;

    placeHolder1 = this.game.add.sprite(game.world.centerX-window.gameWidth/7,game.world.centerY-gameHeight/12,'cardPlaceholder');
    placeHolder1.scale.setTo(cardscale,cardscale);
    placeHolder1.visible = false;

    placeHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/18,game.world.centerY-gameHeight/12,'cardPlaceholder');
    placeHolder2.scale.setTo(cardscale,cardscale);
    placeHolder2.visible = false;

    placeHolder5 = this.game.add.sprite(game.world.centerX+window.gameWidth/32,game.world.centerY-gameHeight/12,'cardPlaceholder');
    placeHolder5.scale.setTo(cardscale,cardscale);
    placeHolder5.visible = false;

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
  selectedCardArray={};

  //create new game //Two Player game with one CPU
  game25 = new Game(3,2);
  //get PlayerNumber
  playerNumber=0;
  cpus[0]=1;
  cpus[1]=2;

  //Allow deck flip
  if(game25.getDealerNumber()==playerNumber){
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
  selectedCardArray={};
  //newRound
  game25.newRound();
  setupCards();

  //Allow deck flip
  if(game25.getDealerNumber()==playerNumber){
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
    CpuFlipTrump();
  }
}//start

function setupCards(){
  //deck
  deck = this.game.add.sprite(game.world.centerX+window.gameWidth/4,game.world.centerY-gameHeight/12,'cardBack');
  deck.scale.setTo(cardscale,cardscale);
  deck.inputEnabled = false;
  deck.visible = true;

  placeHolder1 = this.game.add.sprite(game.world.centerX-window.gameWidth/7,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder1.scale.setTo(cardscale,cardscale);
  placeHolder1.visible = false;

  placeHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/18,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder2.scale.setTo(cardscale,cardscale);
  placeHolder2.visible = false;

  placeHolder5 = this.game.add.sprite(game.world.centerX+window.gameWidth/32,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder5.scale.setTo(cardscale,cardscale);
  placeHolder5.visible = false;

  placeHolder3 = this.game.add.sprite(game.world.centerX+window.gameWidth/4,game.world.centerY-gameHeight/12,'cardPlaceholder');
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

function flipTrump() {
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
  
  checkForMove();
}//flipTrump

function CpuFlipTrump() {
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

}//CpuFlipTrump

function deal() {
  if (this.playerHand) {
    this.playerHand.destroy();
  }

  if (this.cpuHand) {
    this.cpuHand.destroy();
  }
  if (this.cpu2Hand) {
    this.cpu2Hand.destroy();
  }
  
  playerHand = game.add.group();
  cpuHand = game.add.group();
  cpu2Hand = game.add.group();

  placeHolder1.visible = true;
  placeHolder2.visible = true;
  placeHolder5.visible = true;

  //get players hand
  crds= game25.getHand(playerNumber).getCards();
  cpuCrds=game25.getHand(cpus[0]).getCards();
  cpu2Crds=game25.getHand(cpus[1]).getCards();

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

  cpuCardArray[0]=this.game.add.sprite((cardDistance/2)*1,cardHeightCpu,'cardBack');
  cpuCardArray[0].scale.setTo(cardscale/2,cardscale/2);
  cpuCardArray[1]=this.game.add.sprite((cardDistance/2)*2,cardHeightCpu,'cardBack');
  cpuCardArray[1].scale.setTo(cardscale/2,cardscale/2);
  cpuCardArray[2]=this.game.add.sprite((cardDistance/2)*3,cardHeightCpu,'cardBack');
  cpuCardArray[2].scale.setTo(cardscale/2,cardscale/2);
  cpuCardArray[3]=this.game.add.sprite((cardDistance/2)*4,cardHeightCpu,'cardBack');
  cpuCardArray[3].scale.setTo(cardscale/2,cardscale/2);
  cpuCardArray[4]=this.game.add.sprite((cardDistance/2)*5,cardHeightCpu,'cardBack');
  cpuCardArray[4].scale.setTo(cardscale/2,cardscale/2);

  cpu2CardArray[0]=this.game.add.sprite((cardDistance/2)*8,cardHeightCpu,'cardBack');
  cpu2CardArray[0].scale.setTo(cardscale/2,cardscale/2);
  cpu2CardArray[1]=this.game.add.sprite((cardDistance/2)*9,cardHeightCpu,'cardBack');
  cpu2CardArray[1].scale.setTo(cardscale/2,cardscale/2);
  cpu2CardArray[2]=this.game.add.sprite((cardDistance/2)*10,cardHeightCpu,'cardBack');
  cpu2CardArray[2].scale.setTo(cardscale/2,cardscale/2);
  cpu2CardArray[3]=this.game.add.sprite((cardDistance/2)*11,cardHeightCpu,'cardBack');
  cpu2CardArray[3].scale.setTo(cardscale/2,cardscale/2);
  cpu2CardArray[4]=this.game.add.sprite((cardDistance/2)*12,cardHeightCpu,'cardBack');
  cpu2CardArray[4].scale.setTo(cardscale/2,cardscale/2);

  //add players hand to a group
  for (var i = 0; i < Object.keys(playerCardArray).length; i++) {
    playerHand.add(playerCardArray[i]);
  }

  for (i = 0; i < Object.keys(cpu2CardArray).length; i++) {
    cpuHand.add(cpuCardArray[i]);
  }

  for (i = 0; i < Object.keys(cpu2CardArray).length; i++) {
    cpuHand.add(cpuCardArray[i]);
  }
}//deal

function resetPlaceholders(){
  miniPlaceHolder1 = this.game.add.sprite(game.world.centerX-window.gameWidth/8,game.world.centerY-gameHeight/4,placeHolder1.key);
  miniPlaceHolder1.scale.setTo(cardscale/2,cardscale/2);
  miniPlaceHolder1.visible = true;

  miniPlaceHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/25,game.world.centerY-gameHeight/4,placeHolder2.key);
  miniPlaceHolder2.scale.setTo(cardscale/2,cardscale/2);
  miniPlaceHolder2.visible = true;

  miniPlaceHolder5 = this.game.add.sprite(game.world.centerX+window.gameWidth/20,game.world.centerY-gameHeight/4,placeHolder5.key);
  miniPlaceHolder5.scale.setTo(cardscale/2,cardscale/2);
  miniPlaceHolder5.visible = true;


  placeHolder1 = this.game.add.sprite(game.world.centerX-window.gameWidth/7,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder1.scale.setTo(cardscale,cardscale);
  placeHolder1.visible = true;

  placeHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/18,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder2.scale.setTo(cardscale,cardscale);
  placeHolder2.visible = true;

  placeHolder5 = this.game.add.sprite(game.world.centerX+window.gameWidth/32,game.world.centerY-gameHeight/12,'cardPlaceholder');
  placeHolder5.scale.setTo(cardscale,cardscale);
  placeHolder5.visible = true;
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
  if(Object.keys(selectedCardArray).length==3){
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

  if(game25.getPlayerMove()==playerNumber&&game25.getPlayerMove()==game25.getDealerNumber()){
    dealerRobCheck();
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
  var tempCrd;
  //update crds (hand)
  crds= game25.getHand(playerNumber).getCards();

  //get a hold of card object
  for (var i = 0; i < Object.keys(crds).length; i++) {
    if(crds[i].getImageName()==crd.key){
      tempCrd = crds[i];
    }
  }//for 

  var reneged = renegeCheck(tempCrd);
  if(reneged){
  }
  else{
    //remove card from hand
    game25.getPlayers()[playerNumber].removeFromHand(tempCrd);
    crd.visible =false;

    //set selected Card and pass move to next player in game
    game25.incrementMove();

    displayText("You played "+ tempCrd.getFullName());

    selectedCardArray[playerNumber]=tempCrd;

    //move selected card to center
    placeHolder1 = this.game.add.sprite(game.world.centerX-gameWidth/7,game.world.centerY-gameHeight/12,crd.key);
    placeHolder1.scale.setTo(cardscale,cardscale);

    checkForMove();
  }//else 
}//cardPressed

function cpuMove (cpuNum) {
  var plyrs = game25.getPlayers();
  var tempCards = plyrs[cpuNum].getHand().getCards();

  //pick a random cpu card from cpu hand (not implemented yet)
  //var randIndex = Math.floor((Math.random() * Object.keys(tempCards).length) + 1);
  var randIndex = (Object.keys(tempCards).length - 1);
  var crd;

  if(cpuNum==1){
    crd  = cpuCardArray[randIndex];
    crd.visible = false;
  }
  else if(cpuNum==2){
    crd  = cpu2CardArray[randIndex];
    crd.visible = false;
  }

  var tempCrd=tempCards[randIndex];

  displayText("CPU "+cpuNum+" played "+ tempCrd.getFullName());

  selectedCardArray[cpuNum]=tempCrd;

  //remove card from computer card
  plyrs[cpuNum].removeFromHand(tempCrd);

  if(cpuNum==1){
    //move selected card to center
    placeHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/18,game.world.centerY-gameHeight/12,tempCrd.getImageName());
    placeHolder2.scale.setTo(cardscale,cardscale);
  }

  else if(cpuNum==2){
    //move selected card to center
    placeHolder5 = this.game.add.sprite(game.world.centerX+window.gameWidth/32,game.world.centerY-gameHeight/12,tempCrd.getImageName());
    placeHolder5.scale.setTo(cardscale,cardscale);
  }

  //move selected card to center
  //placeHolder2 = this.game.add.sprite(game.world.centerX-window.gameWidth/18,game.world.centerY-gameHeight/12,tempCrd.getImageName());
  //placeHolder2.scale.setTo(cardscale,cardscale);

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

    game25.round.setRobChecked();
  } 

  if(notRobbable){
    checkForMove();
  }
}//robCheck

function dealerRobCheck() {
  //check if player has been asked to rob
  if(game25.round.getDealerRobChecked()){}
  else{
    //if dealer turns up trump ace ask if want to rob
    if(trump.getName()=="ace"&&game25.getPlayerMove()==playerNumber){
      notRobbable=false;
      disableInput();
      robMessageBox();
    }
    game25.round.setDealerRobChecked();
  } 
}//dealerRobCheck

function removeAll() {
  game.world.removeAll();
  playerHand.removeChildren();
  cpuHand.removeChildren();
}//removeAllll

function robMessageBox() {
  this.showRobMessageBox("Do you want to rob the trump card!");
  displayText("Do you want to rob the trump card!");
}//robMessageBox

function showRobMessageBox(text) {
  var w=window.gameWidth/5,h=window.gameHeight/6;
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
  msgBox.x = (game.width / 5.5 - msgBox.width / 2);
  msgBox.y = game.height / 2 - msgBox.height / 2;
  
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
  placeHolder3 = this.game.add.sprite(game.world.centerX+window.gameWidth/4,game.world.centerY-gameHeight/12,trump.getSuit());
  placeHolder3.scale.setTo(cardscale,cardscale);
  placeHolder3.events.onInputDown.add(displayTrump, this);
  placeHolder3.inputEnabled = true;

  placeHolder4 = this.game.add.sprite(game.world.centerX+window.gameWidth/5.5,game.world.centerY-gameHeight/12,'cardBack');
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
      playerCardArray[i].events.onInputDown.add(swapCard,this);
      playerCardArray[i].inputEnabled = true;
  } 
  displayText("Select card to swap");
}//enableInput

function renegeCheck(selectedCard) {
  var reneged=false;
  var warningSuit=false;
  var warningTrump=false;
  //if oppo plays card first check that players selected card isnt reneging 
  if(Object.keys(selectedCardArray).length>0){
    var tmpCrd;
    for (var i = 1; i < (game25.getPlayerCount())+1; i++) {
      //if not undefined
      if(tmpCrd==undefined&&selectedCard!=undefined){
        tmpCrd=selectedCardArray[i];
      }
    }//for

    //check if 
    if(tmpCrd.getSuit() == selectedCard.getSuit()&&tmpCrd.getValue()!=34){
      //same suit cards not reneged
    }//if
    else{
      //check if selected card is a trump
      if(selectedCard.getIsTrump()){
        //not reneged
      }//if
      else{
        //check if players hand has card of same suit as first played
        for (var j = 0; j < Object.keys(crds).length; j++) {
          if(crds[j].getSuit()==tmpCrd.getSuit()){
            //check if Card can be reneged
            if(crds[j].getValue()>=34&&crds[j].getValue()>tmpCrd.getValue()){
              //34(Ace of hearts) 35(Jack of Trumps) 36(5 of Trumps) can be reneged if not beaten by each other (eg 36 can be reneged on 35)
            }//if
            else{
              //reneged a card or didnt match suit
              if(crds[j].getIsTrump()){
                reneged=true;
                if(warningTrump==false){
                  displayText("Dont renage a trump card");
                  warningTrump=true;
                }//if
              }//if
              else{
                //if ace of hearts played and has no trump allows heart to be played
                if(tmpCrd.getValue()==34&&selectedCard.getSuit()==tmpCrd.getSuit()){
                }
                else{
                  reneged=true;
                  if(warningSuit==false){
                    displayText("Please match suit");
                    warningSuit=true;
                  }//if
                }//else   
              }//else
            }//else
          }//if
        }//for 
      }//else
    }//else
  }//if
  else{
    //first in array no renege check
  }
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

  text = game.add.text(game.world.centerX, game.world.centerY-(window.gameHeight/20), text, style);
  text.anchor.setTo(0.5);

  button = game.add.button((game.world.centerX)-(button.width/2), game.world.centerY+window.gameHeight/20, 'restartButton', restart, this, 2, 1, 0);
  button.scale.setTo(0.5,0.5);
}//gameOver

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

//stops mobile users playing in portrait
function handleIncorrect(){
  if(!game.device.desktop){
    //tells user to rotate
    document.getElementById("turn").style.display="block";
  }
}//handleIncorrect

function handleCorrect(){
  if(!game.device.desktop){
    if(isPortrait){
      //set scalings such as height and width
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      isPortrait=game.scale.isGamePortrait;
      game.scale.forceOrientation(true, false);
      game.scale.enterIncorrectOrientation.add(handleIncorrect);
      game.scale.leaveIncorrectOrientation.add(handleCorrect);
      gameHeight=game.height;
      gameWidth=game.width;
      game.scale.setMinMax(200, 100, 500, 250);
      cardDistance = gameWidth/7;
      cardscale = 0.3;
      cardHeight = game.world.centerY+gameHeight/4.5;
      cardHeightCpu = game.world.centerY-gameHeight/2.1;
      
      //if elements not loaded reload page in new orientation
      try {
        this.loadingText.visible=false;
      } catch (error) {
        //reload game
        location.reload(); 
      }
    }
   document.getElementById("turn").style.display="none";
  }
}//handleCorrect