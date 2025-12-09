import { players } from '../data/players.js';


export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
    return players.filter(player => player.position === position);
}
// TODO 5: Write a function to calculate total assists
export const getTotalAssists = () =>
    players.reduce((total, player)=>total + player.goals, 0)

// TODO 6: Write a function to find the top scorer
export function getTopScorer(){
    let max=players[0]
    for (let i = 1; i <players.length ; i++) {
        if(max.goals<players[i].goals){
            max=players[i]
        }
     }
     return max
 } 
 
// TODO 7: Write a function to calculate average age
export function getAverageAge() {
    return players.reduce((total, player)=>total + player.age, 0)/players.length
}

// TODO 8: Write a function to get players by nationality
export function getPlayersByNationality(nationality) {
    return players.filter((p)=>p.nationality==nationality)
}

// TODO 9: Write a function to sort players by goals (highest to lowest)
export function sortPlayersByGoals() {
    const arr_p=players
    arr_p.sort((a, b) => {
 
  if (a.goals < b.goals) {
    return -1;
  }
  if (a.goals > b.goals) {
    return 1;
  }

  return 0;
});
return arr_p
}

 
// TODO 10: Write a function to get young players (under certain age)
export function getYoungPlayers(maxAge) {
    return players.filter((player) => player.age>maxAge);
}


// TODO 11: Write a function to get players with minimum goals
export function getPlayersWithMinGoals(minGoals) {
    return players.filter((player) => player.goals>minGoals);
}

// TODO 12: Write a function to calculate player score
export function calculatePlayerScore(player) {
    return (player.goals*3)+(player.assists * 2)
}

// TODO 13: Write a function to get top 3 scorers
export function getTop3Scorers() {
     const arr_p=players
    arr_p.sort((a, b) => {
 
  if (a.matches < b.matches) {
    return -1;
  }
  if (a.matches > b.matches) {
    return 1;
  }

  return 0;
});
return arr_p.splice(-3)
}
console.log(getTop3Scorers());


// TODO 14: Write a function to get all player names
export function getAllPlayerNames() {
    return players.map((player)=>player.name)
}



// TODO 15: Write a function to calculate goals per match for a player
export function getGoalsPerMatch(player) {
    return player.goals/player.matches
}
 
