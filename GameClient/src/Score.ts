//Typescript class that holds the score of a round of 25

class Score {
    private playerName : string;
    private score: number;
    
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
}//Score