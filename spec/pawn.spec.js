import Pawn from "../src/models/pawn";

const player1 = new Pawn(18, 6, 3);
const player2 = new Pawn(30, 15, 23);

describe("Pawn", function () {
  describe("getLife", function () {
    it("Must return the correct value of the player1's life", function () {
      expect(player1.getLife()).toBe(18);
    });
  });
  describe("getStrength", function () {
    it("Must return the correct value of the player1's strength", function () {
      expect(player1.getStrength()).toBe(6);
    });
  });
  describe("getDef", function () {
    it("Must return the correct value of the player1's defence", function () {
      expect(player1.getDef()).toBe(3);
    });
  });
  describe("recieveAttack", function () {
    it("Must return true if the attack succeeds", function () {
      expect(player1.recieveAttack(player2)).toBe(true);
    });
  });
});
