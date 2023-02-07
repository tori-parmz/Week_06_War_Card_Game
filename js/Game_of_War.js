//Player class
//name, hand, score

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0 //default property value
        this.hand = [] //put 26 cards for each player
    }
}
let player1 = new Player('Josie');
let player2 = new Player('Greg');
console.log(player1);
console.log(player2);

//Class for card - create 52 card objects

class Card {
    constructor(faceValue, suit, rank) {
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}

//Class for the deck

class Deck {
    constructor() {
        this.deck = [];
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades']
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
    //create deck
    createDeck() {
        for(let fIndex = 0; fIndex < this.faceValues.length; fIndex++) {
           // console.log(this.faceValues[fIndex]);
            for(let sIndex = 0; sIndex < this.suits.length; sIndex++){
                //console.log(this.suits[sIndex]);
                this.deck.push(new Card(this.faceValues[fIndex], this.suits[sIndex], this.ranks[fIndex]));
            }
        }
        console.log(this.deck);
    }
   /*
    shuffleDeck() {
        for(let i = this.deck.length - 1; i > 0; i++) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck [i];
            this.deck[i] = this.deck [j];
            this.deck[j] = temp;
        }
        console.log(this.deck);
        
    }
    */

}

let gameDeck = new Deck();
gameDeck.createDeck();
//gameDeck.shuffleDeck();
//Methods in this class to create the deck, shuffle, and deal

