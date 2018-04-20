//Typescript implementation of a 25 game

class Game {
    private round: Round;
    private move : number;
    private players: Player[];
    private player: Player;
    private conn: Connection;
    private dealerNumber: number;

    constructor(gameSize:number,players:number) {
        //TODO - get cards from server
        this.round = new Round(gameSize,players);
        //init variables
        this.players=this.round.getPlayers();
        //get whose dealer/move it is from server
        this.move=0;
        this.dealerNumber=0;
    }//constructor

    public getRound(): Round {
        return this.round; 
    }//getRound

    public newRound(): void {
        //setup a new round
        this.round.newRound();
        this.dealerNumber++;

        if(this.dealerNumber>(this.players.length-1)){
            this.dealerNumber=0;
        }
        this.move=this.dealerNumber;
    }//newRound

    public incrementMove(): void {
        this.move++;
        //change move to start if last player moved
        if(this.move>(this.players.length-1)){
            this.move=0;
        }
    }//incrementMove

    public setPlayerMove(mve: number): void {
        this.move=mve;
    }//setPlayerMove

    public getPlayerMove(): number {
        return this.move; 
    }//getPlayerMove

    public getPlayers(): Player[] {
        return this.players; 
    }//getPlayers

    public setPlayer(plyr: Player): void {
        this.player=plyr;
    }//setPlayer

    public getHand(playerNum): Hand {
        return this.round.getHand(playerNum); 
    }//getHand

    public increaseScore(playerNum): void {
        this.players[playerNum].increaseScore();
    }//increaseScore

    public getTotalScore(): number {
        var totScore=0;
        for(var i = 0; i < Object.keys(this.players).length; i++){
            totScore=totScore+this.players[i].getScore();
        }
        return totScore; 
    }//getTotalScore

    public getScores(): String {
        var scoreString="";

        for(var i = 0; i < Object.keys(this.players).length; i++){
            scoreString+=" "+this.players[i].getPlayerName()+" Score- "+this.players[i].getScore();
        }
        return scoreString; 
    }//getScores

    public checkForWinner():boolean{
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            if(this.players[i].getScore()>=25){
              return true;
            }
          } 
          return false;
    }//checkForWinner

    public getWinner():number{
        var winnerPos;
        for (var i = 0; i < Object.keys(this.players).length; i++) {
            if(this.players[i].getScore()==25){
              winnerPos=i;
            }
          } 
          return winnerPos;
    }//getWinner
}//Game