// taken from https://wsvincent.com/javascript-object-oriented-deck-cards/

class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

const deck1 = new Deck();
console.log("randomised deck: ", deck1.deck);
console.log(deck1.deal(), "is a random card");
console.log(deck1.deal(), "is a random card of what is left");
console.log(deck1.deal(), "is a random card of what is left");
deck1.reset();
console.log(deck1.deck);
