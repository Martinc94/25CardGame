//Typescript Deck 
//Author: Martin Coleman

class Deck {
    private deck = new Array<Card>();
    names = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    suits = ['hearts','diamonds','spades','clubs'];
    
    constructor() {
        //create 52 cards and add to deck array
        for( var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                this.deck.push( new Card(this.names[n], this.suits[s]));
            }
        }

        //shuffle deck
        this.deck=this.shuffle(this.deck);
    }//constructor

    //shuffles Deck using knuth shuffle
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    public shuffle(array) {
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
    }

    //returns a card from the top of the deck
    public pickCard(): Card {
        var crd = this.deck[0];
        this.deck=this.removeFromArray(this.deck,crd);
        return crd;
    }//pickCard
    
    //assigns of trump cards to trumps
    public assignTrump(trumpSuit:string): void {  
        for (var i = 0; i < this.deck.length; i++) { 
            if(this.deck[i].getSuit()==trumpSuit){
                this.deck[i].assignTrump();
            }
        }
        //assign values to cards
        this.assignValues();
    }//assignTrump

    public assignValues(): void {  
        for (var i = 0; i < this.deck.length; i++) { 
            var tmpCrd = this.deck[i];

            switch(tmpCrd.getName()) { 
                case "ace": { 
                   if(tmpCrd.getSuit()=="hearts"){
                        tmpCrd.assignTrump();
                        tmpCrd.assignValue(34);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(33);
                        }
                        else if(tmpCrd.getSuit()=="diamonds"){
                            tmpCrd.assignValue(1);
                        } 
                        else{
                            tmpCrd.assignValue(10);
                        } 
                   } 
                   break; 
                } 
                case "2": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(23);
                        }
                        else
                            tmpCrd.assignValue(2);
                   } 
                   //spades and clubs
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(30);
                        }
                        else
                            tmpCrd.assignValue(9);   
                   } 
                    break; 
                 } 
                 case "3": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(24);
                        }
                        else
                            tmpCrd.assignValue(3);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(29);
                        }
                        else
                            tmpCrd.assignValue(8);   
                   }  
                    break; 
                 } 
                 case "4": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(25);
                        }
                        else
                            tmpCrd.assignValue(4);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(28);
                        }
                        else
                            tmpCrd.assignValue(7);   
                   }  
                    break; 
                 } 
                 case "5": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(36);
                        }
                        else
                            tmpCrd.assignValue(5);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(36);
                        }
                        else
                            tmpCrd.assignValue(6);   
                   } 
                    break; 
                 } 
                 case "6": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(26);
                        }
                        else
                            tmpCrd.assignValue(6);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(27);
                        }
                        else
                            tmpCrd.assignValue(5);   
                   } 
                    break; 
                 } 
                 case "7": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(27);
                        }
                        else
                            tmpCrd.assignValue(7);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(26);
                        }
                        else
                            tmpCrd.assignValue(4);   
                   }  
                    break; 
                 } 
                 case "8": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(28);
                        }
                        else
                            tmpCrd.assignValue(8);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(25);
                        }
                        else
                            tmpCrd.assignValue(3);   
                   }  
                    break; 
                 } 
                 case "9": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(29);
                        }
                        else
                            tmpCrd.assignValue(9);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(24);
                        }
                        else
                            tmpCrd.assignValue(2);   
                   } 
                    break; 
                 } 
                 case "10": { 
                    if(tmpCrd.getSuit()=="hearts"||tmpCrd.getSuit()=="diamonds"){
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(30);
                        }
                        else
                            tmpCrd.assignValue(10);
                   } 
                   else {
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(23);
                        }
                        else
                            tmpCrd.assignValue(1);   
                   }  
                    break; 
                 } 
                 case "jack": {  
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(35);
                        }
                        else
                            tmpCrd.assignValue(11);   
                    break; 
                 } 
                 case "queen": { 
                        if(tmpCrd.getIsTrump()){
                            tmpCrd.assignValue(31);
                        }
                        else
                            tmpCrd.assignValue(12);   
                    
                    break; 
                 } 
                 case "king": { 
                    if(tmpCrd.getIsTrump()){
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
    }//assignValues

    //prints deck to the console
    public printDeck(): void {
        for (var i = 0; i < this.deck.length; i++) { 
            console.log(this.deck[i].toString());
        }
    }//printDeck

    private removeFromArray(array, value) {
        var idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
        return array;
    }//removeFromArray

}//Deck