import { players, clubInfo } from "../data/players.js";

export function getAllPlayers() {
  return players;
}

export const findPlayerById = (id) => {
  return players.find((player) => player.id === id);
};

export function create_player(
  name,
  position,
  age,
  nationality,
  goals = 0,
  assists = 0,
  matches = 0
) {
  return {
    id: players.length + 1,
    name,
    position,
    age,
    goals,
    assists,
    matches,
    nationality,
  };
}


export function addPlayer(player ) {
  players.push(player);
  return player;
}

export function remove_a_player_by_id(id) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].id === id) {
      players.splice(i, 1);
    }
  }
  return players;
}

export function updatePlayer(id, newData) {
  const p = findPlayerById(id);
  if (newData.name) {
    p.name = newData.name;
  }
  if (newData.position) {
    p.position = newData.position;
  }
  if (newData.age) {
    p.age = newData.age;
  }
  if (newData.goals) {
    p.goals = newData.goals;
  }
  if (newData.assists) {
    p.assists = newData.assists;
  }
  if (newData.matches) {
    p.matches = newData.matches;
  }
  if (newData.nationality) {
    p.nationality = newData.nationality;
  }

  return p;
}

function findPlayerByName(name){
     return players.find((player) => player.name.includes(name));
 } 


// const obg={name:'daaaaaaa'}
// console.log(updatePlayer(3,obg));
console.log(findPlayerByName(''));


// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result);
