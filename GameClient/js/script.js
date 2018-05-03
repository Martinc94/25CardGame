//Typescript Card 
//Author: Martin Coleman
var Card = /** @class */ (function () {
    function Card(name, suit) {
        this.name = name;
        this.suit = suit;
        this.trump = false;
        this.value = 0;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getName = function () {
        return this.name;
    };
    Card.prototype.getValue = function () {
        return this.value;
    };
    Card.prototype.getIsTrump = function () {
        return this.trump;
    };
    Card.prototype.getFullName = function () {
        return this.name + " of " + this.suit;
    };
    Card.prototype.getImageName = function () {
        return this.name + "_of_" + this.suit;
    };
    Card.prototype.assignValue = function (value) {
        this.value = value;
    };
    Card.prototype.assignTrump = function () {
        this.trump = true;
    };
    return Card;
}());
//Typescript Connection Class that handles all communications with the server using sockets
//Author: Martin Coleman
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
//Typescript Deck 
//Author: Martin Coleman
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = new Array();
        this.names = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        this.suits = ['hearts', 'diamonds', 'spades', 'clubs'];
        //create 52 cards and add to deck array
        for (var s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < this.names.length; n++) {
                this.deck.push(new Card(this.names[n], this.suits[s]));
            }
        }
        //shuffle deck
        this.deck = this.shuffle(this.deck);
    } //constructor
    //shuffles Deck using knuth shuffle
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    Deck.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    //returns a card from the top of the deck
    Deck.prototype.pickCard = function () {
        var crd = this.deck[0];
        this.deck = this.removeFromArray(this.deck, crd);
        return crd;
    }; //pickCard
    //assigns of trump cards to trumps
    Deck.prototype.assignTrump = function (trumpSuit) {
        for (var i = 0; i < this.deck.length; i++) {
            if (this.deck[i].getSuit() == trumpSuit) {
                this.deck[i].assignTrump();
            }
        }
        //assign values to cards
        this.assignValues();
    }; //assignTrump
    Deck.prototype.assignValues = function () {
        for (var i = 0; i < this.deck.length; i++) {
            var tmpCrd = this.deck[i];
            switch (tmpCrd.getName()) {
                case "ace": {
                    if (tmpCrd.getSuit() == "hearts") {
                        tmpCrd.assignTrump();
                        tmpCrd.assignValue(34);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(33);
                        }
                        else if (tmpCrd.getSuit() == "diamonds") {
                            tmpCrd.assignValue(1);
                        }
                        else {
                            tmpCrd.assignValue(10);
                        }
                    }
                    break;
                }
                case "2": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(23);
                        }
                        else
                            tmpCrd.assignValue(2);
                    }
                    //spades and clubs
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(30);
                        }
                        else
                            tmpCrd.assignValue(9);
                    }
                    break;
                }
                case "3": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(24);
                        }
                        else
                            tmpCrd.assignValue(3);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(29);
                        }
                        else
                            tmpCrd.assignValue(8);
                    }
                    break;
                }
                case "4": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(25);
                        }
                        else
                            tmpCrd.assignValue(4);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(28);
                        }
                        else
                            tmpCrd.assignValue(7);
                    }
                    break;
                }
                case "5": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(36);
                        }
                        else
                            tmpCrd.assignValue(5);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(36);
                        }
                        else
                            tmpCrd.assignValue(6);
                    }
                    break;
                }
                case "6": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(26);
                        }
                        else
                            tmpCrd.assignValue(6);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(27);
                        }
                        else
                            tmpCrd.assignValue(5);
                    }
                    break;
                }
                case "7": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(27);
                        }
                        else
                            tmpCrd.assignValue(7);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(26);
                        }
                        else
                            tmpCrd.assignValue(4);
                    }
                    break;
                }
                case "8": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(28);
                        }
                        else
                            tmpCrd.assignValue(8);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(25);
                        }
                        else
                            tmpCrd.assignValue(3);
                    }
                    break;
                }
                case "9": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(29);
                        }
                        else
                            tmpCrd.assignValue(9);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(24);
                        }
                        else
                            tmpCrd.assignValue(2);
                    }
                    break;
                }
                case "10": {
                    if (tmpCrd.getSuit() == "hearts" || tmpCrd.getSuit() == "diamonds") {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(30);
                        }
                        else
                            tmpCrd.assignValue(10);
                    }
                    else {
                        if (tmpCrd.getIsTrump()) {
                            tmpCrd.assignValue(23);
                        }
                        else
                            tmpCrd.assignValue(1);
                    }
                    break;
                }
                case "jack": {
                    if (tmpCrd.getIsTrump()) {
                        tmpCrd.assignValue(35);
                    }
                    else
                        tmpCrd.assignValue(11);
                    break;
                }
                case "queen": {
                    if (tmpCrd.getIsTrump()) {
                        tmpCrd.assignValue(31);
                    }
                    else
                        tmpCrd.assignValue(12);
                    break;
                }
                case "king": {
                    if (tmpCrd.getIsTrump()) {
                        tmpCrd.assignValue(32);
                    }
                    else
                        tmpCrd.assignValue(13);
                    break;
                }
                default: {
                    //statements;
                    console.log("[INFO] ERROR ASSIGNING VALUES");
                    break;
                }
            }
        }
    }; //assignValues
    //prints deck to the console
    Deck.prototype.printDeck = function () {
        for (var i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i].toString());
        }
    }; //printDeck
    Deck.prototype.removeFromArray = function (array, value) {
        var idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
        return array;
    }; //removeFromArray
    return Deck;
}()); //Deck
//Typescript implementation of a 25 game
var Game = /** @class */ (function () {
    function Game(gameSize, players) {
        //TODO - get cards from server
        this.round = new Round(gameSize, players);
        //init variables
        this.players = this.round.getPlayers();
        //get whose dealer/move it is from server
        this.move = 0;
        this.dealerNumber = 0;
    } //constructor
    Game.prototype.getRound = function () {
        return this.round;
    }; //getRound
    Game.prototype.newRound = function () {
        //setup a new round
        this.round.newRound();
        this.dealerNumber++;
        if (this.dealerNumber > (this.players.length - 1)) {
            this.dealerNumber = 0;
        }
        this.move = this.dealerNumber;
    }; //newRound
    Game.prototype.incrementMove = function () {
        this.move++;
        //change move to start if last player moved
        if (this.move > (this.players.length - 1)) {
            this.move = 0;
        }
    }; //incrementMove
    Game.prototype.setPlayerMove = function (mve) {
        this.move = mve;
    }; //setPlayerMove
    Game.prototype.getPlayerMove = function () {
        return this.move;
    }; //getPlayerMove
    Game.prototype.getPlayers = function () {
        return this.players;
    }; //getPlayers
    Game.prototype.setPlayer = function (plyr) {
        this.player = plyr;
    }; //setPlayer
    Game.prototype.getHand = function (playerNum) {
        return this.round.getHand(playerNum);
    }; //getHand
    Game.prototype.increaseScore = function (playerNum) {
        this.players[playerNum].increaseScore();
    }; //increaseScore
    Game.prototype.getTotalScore = function () {
        var totScore = 0;
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            totScore = totScore + this.players[i].getScore();
        }
        return totScore;
    }; //getTotalScore
    Game.prototype.getScores = function () {
        var scoreString = "";
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            scoreString += " " + this.players[i].getPlayerName() + " Score- " + this.players[i].getScore();
        }
        return scoreString;
    }; //getScores
    Game.prototype.checkForWinner = function () {
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            if (this.players[i].getScore() >= 25) {
                return true;
            }
        }
        return false;
    }; //checkForWinner
    Game.prototype.getWinner = function () {
        var winnerPos;
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            if (this.players[i].getScore() == 25) {
                winnerPos = i;
            }
        }
        return winnerPos;
    }; //getWinner
    return Game;
}()); //Game
//Typescript class that holds players cards
var Hand = /** @class */ (function () {
    function Hand() {
        this.cards = new Array();
    }
    Hand.prototype.addCard = function (crd) {
        this.cards.push(crd);
    };
    Hand.prototype.getCards = function () {
        return this.cards;
    };
    Hand.prototype.swapCard = function (remCrd, addCrd) {
        this.cards = this.removeFromArray(this.cards, remCrd);
        this.addCard(addCrd);
    };
    Hand.prototype.removeCard = function (crd) {
        this.cards = this.removeFromArray(this.cards, crd);
    };
    Hand.prototype.removeFromArray = function (array, value) {
        var idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
        return array;
    }; //removeFromArray
    return Hand;
}()); //Hand
//Typescript class that holds information about the player including the score 
var Player = /** @class */ (function () {
    function Player(name, score) {
        this.playerName = name;
        this.score = score;
    }
    Player.prototype.getPlayerName = function () {
        return this.playerName;
    };
    Player.prototype.setPlayerName = function (value) {
        this.playerName = value;
    };
    Player.prototype.getScore = function () {
        return this.score;
    };
    Player.prototype.setScore = function (value) {
        this.score = value;
    };
    Player.prototype.increaseScore = function () {
        this.score += 5;
    };
    Player.prototype.getHand = function () {
        return this.hand;
    };
    Player.prototype.setHand = function (hnd) {
        this.hand = hnd;
    };
    Player.prototype.getIsCPU = function () {
        return this.isCPU;
    };
    Player.prototype.setAsCPU = function () {
        this.isCPU = true;
    };
    Player.prototype.swapCardFromHand = function (remCrd, addCrd) {
        this.hand.swapCard(remCrd, addCrd);
    };
    Player.prototype.removeFromHand = function (crd) {
        this.hand.removeCard(crd);
    };
    return Player;
}()); //Player
//Typescript implementation of a round of 25
var Round = /** @class */ (function () {
    function Round(playerCount, realCount) {
        this.players = new Array();
        this.playerCount = playerCount;
        this.realCount = realCount;
        this.roundCount = 1;
        this.robChecked = false;
        this.init();
    }
    Round.prototype.init = function () {
        //initialise new deck
        this.deck = new Deck();
        //Pick trump Card
        this.trump = this.deck.pickCard();
        this.deck.assignTrump(this.trump.getSuit());
        this.setupPlayers(this.realCount);
    }; //init
    Round.prototype.newRound = function () {
        //initialise new deck
        this.deck = new Deck();
        this.roundCount++;
        this.robChecked = false;
        //Pick trump Card
        this.trump = this.deck.pickCard();
        this.deck.assignTrump(this.trump.getSuit());
        this.redeal();
    }; //init
    //setup players array
    Round.prototype.redeal = function () {
        //generate hands for each player
        for (var i = 0; i < this.playerCount; i++) {
            var newHand = new Hand();
            //draw 5 card and add to hand
            for (var j = 0; j < 5; j++) {
                var crd = this.deck.pickCard();
                newHand.addCard(crd);
            }
            //give hand to player
            this.players[i].setHand(newHand);
        } //for
    }; //redeal
    //setup players array
    Round.prototype.setupPlayers = function (realCount) {
        //generate hands for each player
        for (var i = 0; i < this.playerCount; i++) {
            //new Hand for Player
            var newPlayer = new Player("Player_" + (i + 1), 0);
            //if not a player add player as a cpu
            if (i >= realCount) {
                newPlayer.setAsCPU();
            }
            var newHand = new Hand();
            //draw 5 card and add to hand
            for (var j = 0; j < 5; j++) {
                var crd = this.deck.pickCard();
                newHand.addCard(crd);
            }
            //give hand to player
            newPlayer.setHand(newHand);
            //add new player to array
            this.players.push(newPlayer);
        } //for
    }; //setupPlayers
    Round.prototype.decideWinningCard = function (cardArray) {
        //first card is winner until beat
        var winner = cardArray[0];
        //iterate over array of cards
        for (var i = 1; i < Object.keys(cardArray).length; i++) {
            var tempCrd = cardArray[i];
            //if temp card is a trump, ace of hearts(34) or same suit compare values
            if (tempCrd.getIsTrump() || winner.getSuit() == tempCrd.getSuit() || tempCrd.getValue() == 34) {
                //compare values (higher value wins)
                if (tempCrd.getValue() > winner.getValue()) {
                    winner = tempCrd;
                }
            }
        }
        return winner;
    }; //decideWinningCard
    Round.prototype.getTrump = function () {
        return this.trump;
    }; //getTrump
    Round.prototype.getPlayers = function () {
        return this.players;
    }; //getPlayers
    Round.prototype.getHand = function (playerNum) {
        return this.players[playerNum].getHand();
    }; //getHand 
    Round.prototype.swapCard = function (playerNum, remCrd, addCrd) {
        this.players[playerNum].swapCardFromHand(remCrd, addCrd);
    }; //swapCard
    Round.prototype.getRoundCount = function () {
        return this.roundCount;
    }; //getRoundCount
    Round.prototype.setRobChecked = function () {
        this.robChecked = true;
    }; //setRobChecked
    Round.prototype.getRobChecked = function () {
        return this.robChecked;
    }; //getRobChecked
    return Round;
}()); //Round
//Typescript class that holds the score of a round of 25
var Score = /** @class */ (function () {
    function Score(name, score) {
        this.playerName = name;
        this.score = score;
    }
    Score.prototype.getPlayerName = function () {
        return this.playerName;
    };
    Score.prototype.setPlayerName = function (value) {
        this.playerName = value;
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    Score.prototype.setScore = function (value) {
        this.score = value;
    };
    Score.prototype.increaseScore = function (value) {
        this.score += 5;
    };
    return Score;
}()); //Score
