import {
  create_board,
  create_soldiers,
  Array_mixing,
  Dispersion_of_soldiers,
  print_arr_frontend,
} from "./board.js";
import input from "analiza-sync";
function create_player(name, type) {
  return { name, type };
}

function Asks_player_what_to_move(list_frontend) {
  let row;
  let coll;
  do {
    row = input("Tell me which line you would like?");
    coll = input("Tell me which column you would like?");
  } while (row > 10 || row < 0 || coll > 10 || coll < 0);
  if (list_frontend[row][coll] === "X") {
    return { row: Number(row), coll: Number(coll) };
  } else {
    console.log("You dont have a player in this spot.");
    return Asks_player_what_to_move(list_frontend);
  }
}

function moving_on_the_board(obj_Moving, list_frontend) {
  let temp;
  do {
    temp = input(`1. V
2. =>
3. ^
4. <=`);

    if (temp == "1") {
      if (
        list_frontend[obj_Moving.row + 1][obj_Moving.coll] &&
        list_frontend[obj_Moving.row + 1][obj_Moving.coll] !== "X"
      ) {
        console.log("is movimg");

        return 1;
      } else {
        console.log("=> is not good");
        continue;
      }
    } else if (temp == "2") {
      if (
        list_frontend[obj_Moving.row][obj_Moving.coll + 1] &&
        list_frontend[obj_Moving.row][obj_Moving.coll + 1] !== "X"
      ) {
        console.log("is movimg");
        return 2;
      } else {
        console.log("^ is not good");
        continue;
      }
    } else if (temp == "3") {
      if (
        list_frontend[obj_Moving.row - 1][obj_Moving.coll] &&
        list_frontend[obj_Moving.row - 1][obj_Moving.coll] !== "X"
      ) {
        console.log("is movimg");
        return 3;
      } else {
        console.log("<= is not good");
        continue;
      }
    } else if (temp == "4") {
      if (
        list_frontend[obj_Moving.row][obj_Moving.coll - 1] &&
        list_frontend[obj_Moving.row][obj_Moving.coll - 1] !== "X"
      ) {
        console.log("is movimg");

        return 4;
      } else {
        console.log("V is not good");
        continue;
      }
    }
  } while (true);
}

function logiga_moving_on_the_board(
  i,
  obj_Moving,
  list_frontend,
  list_beckend
) {
  if (i === 1) {
    const temp =list_frontend[Number(obj_Moving.row) + 1][Number(obj_Moving.coll)];
    if (temp === "_") {
       [list_frontend[obj_Moving.row + 1][obj_Moving.coll],list_frontend[obj_Moving.row ][obj_Moving.coll]]=
    [list_frontend[obj_Moving.row + 1][obj_Moving.coll],list_frontend[obj_Moving.row][obj_Moving.coll]]

    [list_beckend[obj_Moving.row + 1][obj_Moving.coll],list_beckend[obj_Moving.row ][obj_Moving.coll]]=
    [list_beckend[obj_Moving.row + 1][obj_Moving.coll],list_beckend[obj_Moving.row][obj_Moving.coll]]
    
    } else if (temp == "O") {
      const o=list_frontend[obj_Moving.row + 1][obj_Moving.coll]
    }
  }
}

const a = create_soldiers();
const obg = Dispersion_of_soldiers(
  create_board(),
  create_board(),
  Array_mixing(a)
);
console.log(obg.list_frontend);

const x = Asks_player_what_to_move(obg.list_frontend);
const i=moving_on_the_board(x, obg.list_frontend);
logiga_moving_on_the_board(i,x,obg.list_frontend,obg.list_beckend)
console.log(obg.list_beckend);

// const obj = { row: "8", coll: "1" };
// console.log(moving_on_the_board(obj, obg.list_frontend, obg.list_beckend));

// console.log(
// Asks_player_what_to_move(obg.list_frontend)
// );
