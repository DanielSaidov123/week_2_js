import { run_full_game } from "./core/game_logic.js";
import { build_standard_deck, shuffle_by_suit } from "./core/deck.js";
function init() {
  const deck = shuffle_by_suit(build_standard_deck());

  const player = { hand: [] };
  const dealer = { hand: [] };

  run_full_game(deck, player, dealer);
}
init();
