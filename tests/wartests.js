//assertion library

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

describe("createDeck", function(){
    it ("testing to see if our deck has 52 cards", function(){
        const x = new Deck();
        x.createDeck();
        expect(x.deck.length).to.equal(52);
        console.log(x.deck.length);

    })
})

describe("dealDeck", function(){
    it("testing to see if each player receives 26 cards", function(){
        
        const testGame = new GamePlay();
        

        testGame.startGame();
        testGame.dealHands();
        
        expect(testGame.player1.hand.length).to.equal(26);
        expect(testGame.player2.hand.length).to.equal(26);

        console.log(testGame.gameDeck);
        console.log('Test Player One Hand:', testGame.player1.hand.length);
        console.log('Test Player Two Hand:', testGame.player2.hand.length);
        console.log(testGame.player1.hand);
        console.log(testGame.player2.hand);

    })
})