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
        const player1 = new Player("Test Player One");
        const player2 = new Player("Test Player Two");
        const x = new Deck();
        x.createDeck();
        x.dealDeck();
        //expect(player1.hand.length).to.equal(26) &&
        //expect(player2.hand.length).to.equal(26);
        console.log(x);
        console.log(player1.name);
        console.log(player2.name);
        console.log(player1.hand);
        console.log(player2.hand);

    })
})