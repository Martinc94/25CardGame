//Typescript class that holds information about the player including the score 

class Player {
  private playerName: string;
  private score: number;
  private hand: Hand;
  private isCPU: boolean;

  constructor(name: string, score: number) {
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

  public increaseScore() {
    this.score += 5;
  }

  public getHand(): Hand {
    return this.hand;
  }

  public setHand(hnd: Hand) {
    this.hand = hnd;
    if(this.getIsCPU()){
      //order cards for cpu
      this.hand.orderCards();
    }//if 
  }

  public getIsCPU(): boolean {
    return this.isCPU;
  }

  public setAsCPU() {
    this.isCPU = true;
  }

  public swapCardFromHand(remCrd,addCrd) {
    this.hand.swapCard(remCrd,addCrd);
  }

  public removeFromHand(crd) {
    this.hand.removeCard(crd);
  }
} //Player