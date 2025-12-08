import {ask_player_action} from './player_io.js'
export function calculate_hand_value(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    if (["J", "Q", "K"].includes(hand[i].rank)) {
      sum += 10;
    } else if (hand[i].rank == "A") {
      sum += 1;
    } else {
      sum += Number(hand[i].rank);
    }
  }
  return sum;
}

export function deal_two_each(deck, player, dealer) {
  for (let i = 0; i < 2; i++) {
    player.hand.push(deck.shift());
    dealer.hand.push(deck.shift());
  }
  console.log(
    "Player hand:",
    player.hand,
    "=>",calculate_hand_value(player.hand)
  );
  console.log(
    "Dealer hand:",dealer.hand,"=>",calculate_hand_value(dealer.hand)
  );
}

export function dealer_play(deck, dealer) {
  while (calculate_hand_value(dealer.hand >= 17)) {
    dealer.push(deck.shift());
  }
  if (calculate_hand_value(dealer.hand > 21)) {
    console.log(`the player win`);
    return false;
  } else {
    console.log(`the dealer win`);
    return true;
  }
}

export function run_full_game(deck, player, dealer) {
  deal_two_each(deck, player, dealer);
  while (true) {
    const action = ask_player_action();
    if (action === "H") {
      player.hand.push(deck.shift());
      const v = calculate_hand_value(player.hand);
      console.log("Player hits:", player.hand, "=>", v);

      if (v > 21) {
        console.log("PLAYER BUSTED! Dealer wins.");
        return;
      }
    } else {
      break;
    }
  }
  const dealer_ok = dealer_play(deck, dealer);
  if (!dealer_ok) {
    console.log("Player wins!");
    return;
  }

  const p = calculate_hand_value(player.hand);
  const d = calculate_hand_value(dealer.hand);

  console.log(`Final — Player: ${p}, Dealer: ${d}`);

  if (p > d) console.log("Player wins!");
  else if (d > p) console.log("Dealer wins!");
  else console.log("Tie!");
}
