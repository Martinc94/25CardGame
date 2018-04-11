//Typescript class that holds information about the player including the score 

class Player {
    private playerName : string;
    private score: number;
    private hand: Hand;
    
    constructor(name:string,score:number) {
        this.playerName = name;
        this.score = score;
    }

	public getPlayerName(): string {
		return this.playerName;
    }
    
    public setPlayerName(value: string) {
		this.playerName = value;
	}

	public getScore(): number {
		return this.score;
	}

	public setScore(value: number) {
		this.score = value;
    }

    public increaseScore(value: number) {
		this.score += 5;
    }
    
    public getHand(): Hand {
		return this.hand;
	}

	public setHand(hnd: Hand) {
		this.hand = hnd;
    } 
}//Player