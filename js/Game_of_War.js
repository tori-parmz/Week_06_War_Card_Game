//Player class
//name, hand, score

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0 //default property value
        this.hand = [] //put 26 cards for each player
    }
    
}
//Prompt will start when the page is opened to receive names for players one and two
let player1 = new Player (prompt(`Enter a name for Player One:`));
let player2 = new Player (prompt(`Enter a name for Player Two:`));

/*
let player1 = new Player('Josie');
let player2 = new Player('Greg');
console.log(player1);
console.log(player2);
*/

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

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck [i];
            this.deck[i] = this.deck [j];
            this.deck[j] = temp;
        }
        console.log(this.deck);
    

    }
    
  

    dealDeck() {
        player1.hand = this.deck.slice(0, 26);
        console.log(player1.hand);
        player2.hand = this.deck.slice(26, 52);
        console.log(player2.hand);
    }

}

//Creating a new instance of the deck to get shuffled and dealt to each player
let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealDeck();

//Methods in this class to create the deck, shuffle, and deal



//game logic - card comparisons

class GamePlay {
    //methods
    //compare cards
    compareCards() {
        for(let round = 0; round < 26; round++) {
        console.log("> Round: ", round);
        console.log(`${player1.name} ${player1.hand[round].faceValue} ${player1.hand[round].suit}`);
        console.log(`${player2.name} ${player2.hand[round].faceValue} ${player2.hand[round].suit}`);
        
        if(player1.hand[round].rank > player2.hand[round].rank) {
            player1.score++;
            console.log(`${player1.name} score: ${player1.score}`);
            console.log(`${player2.name} score: ${player2.score}`);
            console.log(`${player1.name} won the round!
            `);

        } else if (player2.hand[round].rank > player1.hand[round].rank) {
            player2.score++;
            console.log(`${player1.name} score: ${player1.score}`);
            console.log(`${player2.name} score: ${player2.score}`);
            console.log(`${player2.name} won the round!
            `);
        } else {
            console.log(`${player1.name} score: ${player1.score}`);
            console.log(`${player2.name} score: ${player2.score}`);
            console.log(`${player2.name} Tie round!
            `);
        }
    }
    }

    //determine winner
    determineWinner() {
        if(player1.score > player2.score) {
            console.log(`
>> ${player1.name} won the game!`);
            console.log(`>> ${player1.name} final score: ${player1.score}`);
            console.log(`>> ${player2.name} final score: ${player2.score}`);
            
        } else if(player2.score > player1.score) {
            console.log(`
>> ${player2.name} won the game!`);
            console.log(`>> ${player1.name} final score: ${player1.score}`);
            console.log(`>> ${player2.name} final score: ${player2.score}`);
        } else {
            console.log(`
>> ${player1.name} and ${player2.name} tied the game!`);
            console.log(`>> ${player1.name} final score: ${player1.score}`);
            console.log(`>> ${player2.name} final score: ${player2.score}`);
        }
    }
}
//creating a new instance of the game in order to start the game
let startGame = new GamePlay();

startGame.compareCards();
startGame.determineWinner();



