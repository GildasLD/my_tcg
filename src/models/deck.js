export default class Deck {
  constructor(config) {
    this.cards = config.cards;
  }

  shuffle() {
    if (
      this.cards.length === 0 ||
      this.cards == null ||
      this.cards === undefined ||
      this.cards === ""
    ) {
      return false;
    }
    let initial_set = this.cards;

    this.cards = this.cards.sort(() => Math.random() - 0.5);
    if (initial_set !== this.cards) {
      return true;
    } else {
      return false;
    }
  }

  insertAt(card, position = null) {
    if (position == null) {
      this.cards.push(card);
    } else {
      this.cards.splice(position, 0, card);
    }
    return true;
  }

  draw() {
    if (
      this.cards.length === 0 ||
      this.cards == null ||
      this.cards === undefined ||
      this.cards === ""
    ) {
      return false;
    } else {
      return this.cards.shift();
    }
  }

  getCardsCount() {
    return this.cards.length;
  }
}
