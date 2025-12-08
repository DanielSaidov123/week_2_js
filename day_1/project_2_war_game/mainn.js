import { init_game, play_round } from "./game_logicc/game.js";

function init() {
  console.log("Welcome to the card game");
  const obj_init = init_game();
  while (obj_init.player_1.hand.length>0 && obj_init.player_2_AI.hand.length>0) {
    play_round(obj_init.player_1, obj_init.player_2_AI);
  }
}
init();
