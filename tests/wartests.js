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