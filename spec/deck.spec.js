import Deck from "../src/models/deck";
import Config from "../src/models/config";

var param = JSON.parse(Config.deck.param);
const deck = new Deck(param);

describe("Deck", function () {
  describe("shuffle", function () {
    it("Without a card in the deck, must return false", function () {
      deck.cards = [];
      expect(deck.shuffle()).toEqual(false);
    });

    it("Must shuffle the deck, returns true if the deck has been shuffled, false otherwise.", () => {
      deck.cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
      deck.shuffle();
      expect(deck.cards).not.toEqual([
        "card-1",
        "card-2",
        "card-3",
        "card-4",
        "card-5",
      ]);
    });
  });
  describe("insertAt", function () {
    it("Must allow to add a card (first parameter) in the package at a position given in second parameter. Adds it at the end of the pack if the position is not given.", function () {
      deck.cards = ["card-1", "card-2", "card-3"];
      expect(deck.insertAt("card-9", 2)).toBe(true);
    });
  });
  describe("draw", function () {
    it("Must draw the first card of the deck. Returns the first card of the deck and removes it from the deck.", function () {
      deck.cards = ["card-1", "card-2", "card-3"];
      expect(deck.draw()).toBe("card-1");
    });
    it("Returns false if there are no cards in the deck.", function () {
      deck.cards = [];
      expect(deck.draw()).toBe(false);
    });
  });
  describe("getCardsCount", function () {
    it("Returns the number of cards currently in the deck. ", function () {
      deck.cards = ["card-1", "card-2", "card-3"];
      expect(deck.getCardsCount()).toBe(3);
    });
  });
});
