export function create_card(rank, suite) {
  let value = 0;
  if (rank == "J") {
    value = 11;
  } else if (rank == "Q") {
    value = 12;
  } else if (rank == "K") {
    value = 13;
  } else if (rank == "A") {
    value = 14;
  } else {
    value = Number(rank);
  }
  return { rank, suite, value };
}

export function compare_cards(p1_card, p2_card) {
  if (p1_card.value > p2_card.value) {
    return "p1";
  } else if (p2_card.value > p1_card.value) {
    return "p2";
  } else {
    return "WAR";
  }
}

export function create_deck() {
  const arr_cards = [];
  const arr_1 = ["H", "C", "D", "S"];
  const arr_2 = [
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
    "A",
  ];
  for (let i = 0; i < arr_1.length; i++) {
    for (let j = 0; j < arr_2.length; j++) {
      const card = create_card(arr_2[j], arr_1[i]);
      arr_cards.push(card);
    }
  }

  return arr_cards;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let index_i = randomInt(0, 51);
    let index_2 = randomInt(0, 51);
    if (index_i == index_2) {
      continue;
    } else {
      [deck[index_i], deck[index_2]] = [deck[index_2], deck[index_i]];
    }
  }
  return deck;
}
