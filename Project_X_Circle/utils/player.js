export function create_player(name) {
  return { name:name ,sign:''};
}

export function random_From_Array(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


export function ruffel_sign(p1, p2) {
  const arr = ["X", "O"];
  const temp = random_From_Array(arr);
  if (temp === "X") {
    p1.sign = temp;
    p2.sign = "O";
  } else {
    p1.sign = temp;
    p2.sign = "X";
  }
  return [p1,p2]
}


