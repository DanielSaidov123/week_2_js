import { players, clubInfo } from './data/players.js';
// Import your functions here as you create them
// Example:
import { getAllPlayers, findPlayerById, addPlayer } from './utils/playerManager.js';
import { getTotalGoals, getPlayersByPosition } from './utils/statistics.js';

console.log('='.repeat(50));
console.log('⚽ FOOTBALL CLUB MANAGEMENT SYSTEM ⚽');
console.log('='.repeat(50));

// Display club information
console.log('\n📋 CLUB INFORMATION');
console.log('─'.repeat(50));
console.log(`Name: ${clubInfo.name}`);
console.log(`Founded: ${clubInfo.founded}`);
console.log(`Stadium: ${clubInfo.stadium}`);
console.log(`City: ${clubInfo.city}`);

// TODO: After you write getAllPlayers(), use it here
console.log('\n👥 PLAYER ROSTER');
console.log('─'.repeat(50));
getAllPlayers().forEach(player => {
    console.log(`#${player.id} ${player.name} - ${player.position} - Age ${player.age}`);
});

// TODO: After you write getTotalGoals(), use it here
console.log('\n📊 TEAM STATISTICS');
console.log('─'.repeat(50));
console.log(`Total Goals: ${getTotalGoals()}`);

// TODO: Test your functions here!
// Example tests:

// Test findPlayerById
// const player = findPlayerById(3);
// console.log('\n🔍 Found Player:', player);

// Test getPlayersByPosition
// const forwards = getPlayersByPosition('Forward');
// console.log('\n⚡ Forwards:', forwards);

// Test addPlayer
const newPlayer = addPlayer({
    name: "Carlos Rodriguez",
    position: "Midfielder",
    age: 22,
    nationality: "Mexico"
});
console.log('\n➕ Added Player:', newPlayer);

console.log('\n' + '='.repeat(50));
console.log('🎯 Write your functions and test them here! 🎯');
console.log('='.repeat(50));