function create_board_front() {
  const board_Stratego_arr = [];
  for (let i = 0; i < 10; i++) {
    const arr = [];
    for (let j = 0; j < 10; j++) {
      arr.push("_");
    }
    board_Stratego_arr.push(arr);
  }
  return board_Stratego_arr;
}

function create_board_beckend() {
  const board_Stratego_arr = [];
  for (let i = 0; i < 10; i++) {
    const arr = [];
    for (let j = 0; j < 10; j++) {
      arr.push("_");
    }
    board_Stratego_arr.push(arr);
  }
  return board_Stratego_arr;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Dispersion_of_soldiers(list_frontend, list_beckend) {
  const ranksAndCounts = [
    { rank: 1, count: 1 },
    { rank: 8, count: 2 },
    { rank: 5, count: 3 },
    { rank: 4, count: 4 },
    { rank: 4, count: 4 },
    { rank: 4, count: 4 },
    { rank: 3, count: 3 },
    { rank: 2, count: 8 },
    { rank: 1, count: 9 },
    { rank: 10, count: 1 },
  ];
   let row
   let col
  for (let i = 0; i < ranksAndCounts.length; i++) {
    for (let j = 0; j < ranksAndCounts[i].count; j++) {
      do {
       row = randomInt(0, 9);
       col = randomInt(0, 5);
      } while (list_beckend[row][col] !== null);
      list_frontend[row][col] = "X";
      list_beckend[row][col] = ranksAndCounts[i].rank;
    }
  }
  console.log(list_beckend);
}
Dispersion_of_soldiers(create_board_front(),create_board_beckend());
