//Typescript class that holds players cards

class Hand {
    private cards = new Array<Card>();

    public addCard(crd: Card): void {
        this.cards.push(crd);
    }

    public getCards(): Array<Card> {
        return this.cards;
    }

    public swapCard(remCrd: Card,addCrd: Card) {
        this.cards=this.removeFromArray(this.cards,remCrd);
        this.addCard(addCrd);
    }
    
    public orderCards(){
        //sort card array by card Value
        this.cards.sort((a, b) => a.getValue() < b.getValue() ? -1 : a.getValue() > b.getValue() ? 1 : 0);
    }
    
    public removeCard(crd: Card) {
        this.cards=this.removeFromArray(this.cards,crd);
	}

    private removeFromArray(array, value) {
        var idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
        return array;
    }//removeFromArray
}//Hand