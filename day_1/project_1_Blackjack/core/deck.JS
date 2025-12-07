function build_standard_deck() {
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
  console.log(arr_cards.length);

  return arr_cards;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle_by_suit(deck, swaps = 5000) {
  for (let i = 0; i < swaps; i++) {
    let index_i = randomInt(-1, 51);
    let card_i = deck[index_i];
    while (true) {
      let index_j = randomInt(-1, 51);

      if (card_i.suite == "H") {
        if (index_i == index_j || !index_j % 5 == 0) {
          continue;
        }
      }

      if (card_i.suite == "C") {
        if (index_i == index_j || !index_j % 3 == 0) {
          continue;
        }
      
      }

      if (card_i.suite == "D") {
        if (index_i == index_j || !index_j % 2 == 0) {
          continue;
        }
      
      }

      if (card_i.suite == "S") {
        if (index_i == index_j || !index_j % 7 == 0) {
          continue;
        }
       
      }
       deck[index_i],deck[index_j] = deck[index_j], deck[index_i];
        break;

    }
  }
  return deck;
}



//TODO:
function test() {
  let deck = build_standard_deck();
  console.log(shuffle_by_suit(deck));
}
test();
