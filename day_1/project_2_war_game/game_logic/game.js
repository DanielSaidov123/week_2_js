import { compare_cards, create_deck, shuffle } from "../utils/deck.js";

function create_player(name = "AI") {
  return { name, hand: [], won_pile: [] };
}

function init_game() {
  const player_1 = create_player("daniel");
  const player_2_AI = create_player();
  const card = create_deck();
  const shuffle_cards = shuffle(card);
  player_1.hand = shuffle_cards.slice(0, 26);
  player_2_AI.hand = shuffle_cards.slice(26);

  return { shuffle_cards, player_1, player_2_AI };
}

function play_round(player_1, player_2_AI) {
  let card_player_1 = player_1.hand.pop();
  let card_player_2_AI = player_2_AI.hand.pop();
  const temp = compare_cards(card_player_1, card_player_2_AI);
  if (temp == "p1") {
    player_1.won_pile.push(card_player_1)
     player_1.won_pile.push(card_player_2_AI)
  }else if(temp == "p1"){
    player_2_AI.won_pile.push(card_player_1)
    player_2_AI.won_pile.push(card_player_2_AI) }
}
