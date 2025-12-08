import input from "analiza-sync";

export function ask_player_action() {
  let ask = "";
  do {
    ask = input("enter S or H: ");
  } while (ask !== "S" && ask !== "H");

  return ask;
}

