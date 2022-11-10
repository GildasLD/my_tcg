import config from "../src/models/config";
import Board from "../src/models/board";

let param = JSON.parse(config.board.param);
const board = new Board(param);

describe("Board", function () {
  describe("addCard", function () {
    it("Adds a card to the end of the list of cards already in the hand, if everything went well, the function returns true, otherwise false.", function () {
      board.cards = ["card-1", "card-2", "card-3"];
      board.limit = 4;
      expect(board.addCard("card-4")).toBe(true);
    });

    it("If no limit is set, the maximum number of cards is 7", function () {
      board.cards = [
        "card-1",
        "card-2",
        "card-3",
        "card-5",
        "card-6",
        "card-7",
      ];
      expect(board.addCard("card-8")).toBe(false);
    });
  });
  describe("removeCard", function () {
    it("Must return the number of the withdrawn card passed in parameter", function () {
      board.cards = ["card-1", "card-2", "card-3"];
      expect(board.removeCard(0)).toBe("card-1");
    });
    it("It must not be possible to remove a card that is not in the deck", function () {
      board.cards = [];
      expect(board.removeCard(0)).toBe(false);
    });
  });
  describe("getAllCards", function () {
    it("Must return an array of all cards", function () {
      board.cards = ["card-1", "card-2", "card-3"];
      expect(board.getAllCards()).toEqual(["card-1", "card-2", "card-3"]);
    });
  });

  describe("getCardsCount", function () {
    it("Must return the number of cards in the deck", function () {
      board.cards = ["card-1", "card-2", "card-3"];
      expect(board.getCardsCount()).toBe(3);
      board.cards = [
        "card-1",
        "card-2",
        "card-3",
        "card-4",
        "card-5",
        "card-6",
      ];
      expect(board.getCardsCount()).toBe(6);
    });
  });
});
