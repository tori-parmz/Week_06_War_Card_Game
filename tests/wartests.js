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


describe("dealHands", function(){
    it("testing to see if Test Players receive 26 cards", function(done) {
        
        const testGame = new GamePlay();
        
        //needs to startGame to create the deck & split the deck
        //dealHands to deal to each of the players
        testGame.startGame();
        testGame.dealHands();
        
        assert.equal(testGame.player1.hand.length, 26);
        assert.equal(testGame.player2.hand.length, 26);
        done();

         
        //console logging the new deck, the values for each of the hands, and the full arrays for each hand
        console.log(testGame.gameDeck);

        console.log('Test Player One Hand:', testGame.player1.hand.length);
        console.log('Test Player Two Hand:', testGame.player2.hand.length);
        
        console.log(testGame.player1.hand);
        console.log(testGame.player2.hand);
        

    })
})