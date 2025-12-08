export function build_standard_deck() {
  const arr_1 = ["H", "C", "D", "S"];
  const arr_2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const arr_cards = [];
  for (let i = 0; i < arr_1.length; i++) {
    for (let j = 0; j < arr_2.length; j++) {
      const obj_card = { rank: arr_2[j], suite: arr_1[i] };
      arr_cards.push(obj_card);
    }
  }

  return arr_cards;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle_by_suit(deck, swaps = 5000) {
  for (let i = 0; i < swaps; i++) {
    let index_i = randomInt(0, 51);
    let card_i = deck[index_i].suite;

    while (true) {
      let index_j = randomInt(0, 51);

      if (card_i == "H") {
        if (index_i == index_j || index_j % 5 !== 0) {
          continue;
        }
      }

      else if (card_i == "C") {
        if (index_i == index_j || index_j % 3 !== 0) {
          continue;
        }
      }

      else if (card_i == "D") {
        if (index_i == index_j || index_j % 2 !== 0) {
          continue;
        }
      }

      else if (card_i == "S") {
        if (index_i == index_j || index_j % 7 !== 0) {
          continue;
        }
      }
      [deck[index_i], deck[index_j]] = [deck[index_j], deck[index_i]];
      break;
    }
  }  
  return deck;
}

console.log(shuffle_by_suit(build_standard_deck()));

