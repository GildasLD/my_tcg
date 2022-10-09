import config from "../src/models/config";
import Hand from "../src/models/hand";

let param = JSON.parse(config.hand.param);
const hand = new Hand(param);

describe("Hand", function () {
  describe("addCard", function () {
    it("Adds a card to the end of the list of cards already in the hand, if everything went well, the function returns true, otherwise false.", function () {
      hand.cards = ["card-1", "card-2", "card-3"];
      hand.limit = 4;
      expect(hand.addCard("card-4")).toBe(true);
    });

    it("If no limit is set, the maximum number of cards is 7", function () {
      hand.cards = ["card-1", "card-2", "card-3", "card-5", "card-6", "card-7"];
      expect(hand.addCard("card-8")).toBe(false);
    });
  });
  describe("removeCard", function () {
    it("Must return the number of the withdrawn card passed in parameter", function () {
      hand.cards = ["card-1", "card-2", "card-3"];
      expect(hand.removeCard(0)).toBe("card-1");
    });
    it("It must not be possible to remove a card that is not in the deck", function () {
      hand.cards = [];
      expect(hand.removeCard(0)).toBe(false);
    });
  });
  describe("getAllCards", function () {
    it("Must return an array of all cards", function () {
      hand.cards = ["card-1", "card-2", "card-3"];
      expect(hand.getAllCards()).toEqual(["card-1", "card-2", "card-3"]);
    });
  });

  describe("getCardsCount", function () {
    it("Must return the number of cards in the deck", function () {
      hand.cards = ["card-1", "card-2", "card-3"];
      expect(hand.getCardsCount()).toBe(3);
      hand.cards = ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6"];
      expect(hand.getCardsCount()).toBe(6);
    });
  });
});
