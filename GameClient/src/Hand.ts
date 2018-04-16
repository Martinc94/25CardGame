//Typescript class that holds players cards

class Hand {
    private cards = new Array<Card>();

    public addCard(crd: Card): void {
        this.cards.push(crd);
    }

    public getCards(): Array<Card> {
        return this.cards;
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