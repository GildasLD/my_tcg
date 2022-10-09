export default class Hand {
  constructor(config, limit = 7) {
    this.cards = config.cards;
    this.limit = limit;
  }

  addCard(card) {
    if (
      this.cards.length > this.limit ||
      this.cards == null ||
      this.cards === undefined
    ) {
      return false;
    } else {
      this.cards.push(card);
      return true;
    }
  }

  removeCard(position) {
    const remove = this.cards[position];
    if (this.cards.length) {
      return this.cards.splice(position, 1), remove;
    } else {
      return false;
    }
  }

  getAllCards() {
    return this.cards;
  }
  getCardsCount() {
    return this.cards.length;
  }
}
