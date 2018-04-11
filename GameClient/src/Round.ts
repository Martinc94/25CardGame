//Typescript implementation of a round of 25

class Round {
    private deck : Deck;
    //array of players
    private players = new Array<Player>();
    private trump : Card;
    private playerCount : number;

    constructor(playerCount:number) {
        this.playerCount=playerCount;
        this.init();
    }

    private init(){
        //initialise new deck
        this.deck = new Deck();

        //Pick trump Card
        this.trump=this.deck.pickCard();

        this.deck.assignTrump(this.trump.getSuit());

        this.setupPlayers();

        this.testRound();

    }//init

    //setup players array
    private setupPlayers(){
        //generate hands for each player
        for(var i = 0; i < this.playerCount; i++){
            //new Hand for Player
            var newPlayer = new Player("Player "+(i+1),0);
            var newHand = new Hand();

            //draw 5 card and add to hand
            for(var j = 0; j < 5; j++){
                var crd = this.deck.pickCard();
                newHand.addCard(crd);
            }

            //give hand to player
            newPlayer.setHand(newHand);

            //add new player to array
            this.players.push(newPlayer);
        }//for
    }

    public decideWinningCard(cardArray: Array<Card>): Card {
        //first card is winner until beat
        var winner=cardArray[0];

        //iterate over array of cards
        for(var i = 1; i < cardArray.length; i++){
            var tempCrd=cardArray[i];

            //if temp card is a trump or same suit compare values
            if(tempCrd.getIsTrump()||winner.getSuit()==tempCrd.getSuit()){
                //compare values (higher value wins)
                if(tempCrd.getValue() > winner.getValue()){
                    winner=tempCrd;
                }
            }     
        }
        return winner;
    }//decideWinningCard

    public start(){
        //console.log("start");

        for(var i = 1; i < this.players.length; i++){
           // console.log(this.players[i].getHand().getCards().toString());

            var cards =this.players[i].getHand().getCards();

            //console.log(cards[0].getImageName());
        }
        
    }

    public getTrump(): Card {
        return this.trump; 
    } 

    public getPlayers(): Player[] {
        return this.players; 
    } 

    public getHand(playerNum): Hand {
        return this.players[playerNum].getHand(); 
    } 
    
    private testRound(){
        //take one card from each player

        //add to array

        //get winner from array 

        //print winning card and player name
       
    }
}//Round