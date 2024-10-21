class Suit {
  constructor(suitValue) {
    this.suitValue = suitValue;
  }

  get_suit() {
    switch (this.suitValue) {
      case 0:
        return "clubs";
      case 1:
        return "diamonds";
      case 2:
        return "hearts";
      case 3:
        return "spades";
      default:
        throw new Error("Invalid suit value: " + this.suitValue);
    }
  }
}

class Face {
  constructor(faceValue) {
    this.faceValue = faceValue;
  }

  get_faceValue() {
    switch (this.faceValue) {
      case 0:
        return "ace";
      case 10:
        return "jack";
      case 11:
        return "queen";
      case 12:
        return "king";
      default:
        if (this.faceValue >= 1 && this.faceValue <= 9) {
          return (this.faceValue + 1).toString();
        }
        throw new Error("Invalid face value: " + this.faceValue);
    }
  }
}

class Card {
  constructor(faceValue, suit) {
    this.faceValue = new Face(faceValue);
    this.suit = new Suit(suit);
  }

  create_card() {
    return `${this.faceValue.get_faceValue()} of ${this.suit.get_suit()}`;
  }
}


class Deck {
  create_deck() {
    const deck = [];

    for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        deck.push(new Card(faceValue, suit));
      }
    }
    return deck;
  }

  get_cards() {
    const deck = this.create_deck();
    return deck.map((card) => card.create_card());
  }
}

const deck = new Deck().get_cards();
deck.forEach((card) => console.log(card));
