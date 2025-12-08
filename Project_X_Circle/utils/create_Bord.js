function create_bord() {
  const bord = [];
  for (let i = 0; i < 3; i++) {
    const arr = [];
    for (let j = 0; j < 3; j++) {
      arr.push("_");
    }

    bord.push(arr);
  }
  return bord;
}

function create_player(name) {
  return { name:name ,sign:''};
}

function random_From_Array(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const arr = ["X", "O"];
console.log(random_From_Array(arr));

function ruffel_sign(p1, p2) {
  const arr = ["X", "O"];
  const temp = random_From_Array(arr);
  if (temp === "X") {
    p1.sign = temp;
    p2.sign = "O";
  } else {
    p1.sign = temp;
    p2.sign = "X";
  }
  return {p1,p2}
}

// function (){ } 


const p1=create_player('daniel')
const p2=create_player('david')
console.log(ruffel_sign(p1,p2));

