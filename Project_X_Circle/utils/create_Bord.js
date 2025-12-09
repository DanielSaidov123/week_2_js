import {create_player,ruffel_sign} from './player.js'
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

function FillsABoard(row,col,bord,player){
  if(bord[row][col]==='_'){
    bord[row][col]=player.sign
  }
  else if(bord[row][col]!=='_'){
    console.log('is not good please enter agine');
   }
 } 


 function IfIsWin(bord){
  for (let i = 0; i <3 ; i++) {
    for (let j = 0; j <3 ; j++) {
      

     }
   }


  } 
const p1=create_player('daniel')
const p2=create_player('david')
const arr=ruffel_sign(p1,p2)
console.log(arr[1].sign);
const matrix=create_bord()
FillsABoard(2,2,matrix,arr[1])
console.log(matrix);





