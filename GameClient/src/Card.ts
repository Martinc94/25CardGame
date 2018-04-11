//Typescript Card 
//Author: Martin Coleman

class Card {
	private name : string;
    private suit : string;
    private value: number;
    private trump : boolean; 
	
    constructor(name:string,suit:string) {
        this.name = name;
        this.suit = suit;
        this.trump = false;
        this.value=0;  
    }

    public getSuit(): string {
        return this.suit; 
    }

    public getName(): string {
        return this.name; 
    }

    public getValue(): number {
        return this.value; 
    }

    public getIsTrump(): boolean {
        return this.trump; 
    }

    public toString(): string {
        return `${this.name} of ${this.suit}`; 
    }

    public getImageName(): string {
        return `${this.name}_of_${this.suit}`; 
    }

    public assignValue(value: number): void {
        this.value=value;
    }

    public assignTrump(): void {
        this.trump=true;
    }
}

