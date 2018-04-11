class Game {
    private round: Round;
    private move : number;
    private players: Player[];
    private player: Player;
    private hand: Hand;
    private conn: Connection;

    constructor(players:number) {
        //TODO
        //get cards from server

        this.round = new Round(players);
        this.round.start();

        //get whose move it is from server
        this.move=0;
    }

    public getRound(): Round {
        return this.round; 
    } 

    public getPlayerMove(): number {
        return this.move; 
    } 

    public getPlayers(): Player[] {
        return this.getPlayers(); 
    }

    public setPlayer(plyr: Player): void {
        this.player=plyr;
    }

    public getHand(playerNum): Hand {
        return this.round.getHand(playerNum); 
    }
}