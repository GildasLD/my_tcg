import Config from "../src/models/config";
import Cemetary from "../src/models/cemetary";

var param = JSON.parse(Config.cemetary.param);
const cemetary = new Cemetary(param);

describe("Cemetary", function () {
   describe("shuffle", function () {
     it("Without a card in the deck, must return false", function () {
       cemetary.cards = [];
       expect(cemetary.shuffle()).toEqual(false);
     });

     it("Must shuffle the deck, returns true if the deck has been shuffled, false otherwise.", () => {
       cemetary.cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
       cemetary.shuffle();
       expect(cemetary.cards).not.toEqual([
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
       cemetary.cards = ["card-1", "card-2", "card-3"];
       expect(cemetary.insertAt("card-9", 2)).toBe(true);
     });
   });
   describe("draw", function () {
     it("Must draw the first card of the cemetary. Returns the first card of the deck and removes it from the cemetary.", function () {
       cemetary.cards = ["card-1", "card-2", "card-3"];
       expect(cemetary.draw()).toBe("card-1");
     });
     it("Returns false if there are no cards in the cemetary.", function () {
       cemetary.cards = [];
       expect(cemetary.draw()).toBe(false);
     });
   });
   describe("getCardsCount", function () {
     it("Returns the number of cards currently in the cemetary. ", function () {
       cemetary.cards = ["card-1", "card-2", "card-3"];
       expect(cemetary.getCardsCount()).toBe(3);
     });
   });
});
