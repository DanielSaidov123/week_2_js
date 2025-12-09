export function create_board() {
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

export function create_soldiers() {
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
  const arr_soldiers = [];
  let objSoldier={}
  for (let i = 0; i < ranksAndCounts.length; i++) {
    for (let j = 0; j < ranksAndCounts[i].count; j++) {
      objSoldier={rank:ranksAndCounts[i].rank};
      arr_soldiers.push(objSoldier);
    }
  }
  objSoldier={rank:"flag"}
  arr_soldiers.push(objSoldier);

  return arr_soldiers;
}

export function Array_mixing(arr_soldiers) {
  for (let i = 0; i < 50; i++) {
    const index_1 = randomInt(1, 39);
    const index_2 = randomInt(1, 39);
    if (index_1 === index_2) {
      continue;
    }
    [arr_soldiers[index_1], arr_soldiers[index_2]] = [
      arr_soldiers[index_2],
      arr_soldiers[index_1],
    ];
  }
  return arr_soldiers;
}

export function Dispersion_of_soldiers(list_frontend, list_beckend, arr_soldiers) {
  let count=0
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
      list_frontend[i][j]='X'
      list_beckend[i][j]=arr_soldiers[count]
      count++
    }
  }
    count=0
  for (let i = 6; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      list_frontend[i][j]='O'
      list_beckend[i][j]=arr_soldiers[count]
      count++
    }
  }

  return {list_frontend,list_beckend}
}


export function print_arr_frontend(list_frontend){
  for (let i = 0; i <list_frontend.length ; i++) {
    console.log(list_frontend[i]);
    
   }
}



