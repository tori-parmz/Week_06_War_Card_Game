//Player class
//name, hand, score

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0 //default property value
        this.hand = [] //put 26 cards for each player

        
    }
    
}



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
        this.playerDeck1 = [];
        this.playerDeck2 = [];


        
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
        //console.log(this.deck);
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck [i];
            this.deck[i] = this.deck [j];
            this.deck[j] = temp;
        }
        console.log(this.deck);
    

    }

    splitDeck() {
        this.playerDeck1 = this.deck.slice(0, 26);
        this.playerDeck2 = this.deck.slice(26, 52);
    

    }

}


//Methods in this class to create the deck, shuffle, and deal



//game logic - card comparisons

class GamePlay {
    constructor() {
    
    //two empty variables that will take the new player objects when created
    this.player1 = null;
    this.player2 = null;
    }
    
   


    startGame() {
    this.player1 = new Player (prompt(`Enter a name for Player One:`));
    this.player2 = new Player (prompt(`Enter a name for Player Two:`));

    this.gameDeck = new Deck();
    this.gameDeck.createDeck();
    this.gameDeck.shuffleDeck();
    this.gameDeck.splitDeck();


    }
    dealHands() {
        for (let i = 0; i < 26; i++) {
            this.player1.hand.push(this.gameDeck.playerDeck1[i]);
        }

        for (let i = 0; i < 26; i++) {
        this.player2.hand.push(this.gameDeck.playerDeck2[i])
        }

        console.log(this.player1.hand);
        console.log(this.player2.hand);
    }
    //this.player1.hand.push(this.gameDeck.playerDeck1);
    //this.player2.hand.push(this.gameDeck.playerDeck2);
    


     //compare cards
    compareCards() {
        for(let round = 0; round < 26; round++) {
        console.log("> Round: ", round);
        console.log(`${this.player1.name} ${this.player1.hand[round].faceValue} ${this.player1.hand[round].suit}`);
        console.log(`${this.player2.name} ${this.player2.hand[round].faceValue} ${this.player2.hand[round].suit}`);
        
        if(this.player1.hand[round].rank > this.player2.hand[round].rank) {
            this.player1.score++;
            console.log(`${this.player1.name} score: ${this.player1.score}`);
            console.log(`${this.player2.name} score: ${this.player2.score}`);
            console.log(`${this.player1.name} won the round!
            `);

        } else if (this.player2.hand[round].rank > this.player1.hand[round].rank) {
            this.player2.score++;
            console.log(`${this.player1.name} score: ${this.player1.score}`);
            console.log(`${this.player2.name} score: ${this.player2.score}`);
            console.log(`${this.player2.name} won the round!
            `);
        } else {
            console.log(`${this.player1.name} score: ${this.player1.score}`);
            console.log(`${this.player2.name} score: ${this.player2.score}`);
            console.log(`${this.player2.name} Tie round!
            `);
        }
    }
    }

    //determine winner
    determineWinner() {
        if(this.player1.score > this.player2.score) {
            console.log(`
>> ${this.player1.name} won the game!`);
            console.log(`>> ${this.player1.name} final score: ${this.player1.score}`);
            console.log(`>> ${this.player2.name} final score: ${this.player2.score}`);
            
        } else if(this.player2.score > this.player1.score) {
            console.log(`
>> ${this.player2.name} won the game!`);
            console.log(`>> ${this.player1.name} final score: ${this.player1.score}`);
            console.log(`>> ${this.player2.name} final score: ${this.player2.score}`);
        } else {
            console.log(`
>> ${this.player1.name} and ${this.player2.name} tied the game!`);
            console.log(`>> ${this.player1.name} final score: ${this.player1.score}`);
            console.log(`>> ${this.player2.name} final score: ${this.player2.score}`);
        }
    }
}
//creating a new instance of the game in order to start the game
let newGame = new GamePlay();

//this startGame method will create the deck, shuffle the deck, and split the deck to be stored inside two variables that can be
//accessed within the GamePlay class
newGame.startGame();
//the dealHands method will push each index of the split deck arrays into the players' hands using two for loops
newGame.dealHands();

newGame.compareCards();

newGame.determineWinner();

