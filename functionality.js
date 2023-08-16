import playerPiece,{playerOne,playerTwo} from './playerPieces.js'



let mode = 'selectPlayer';






function pushToGameboard(){
for(let piece of playerOne.pieces){
for(let i = 0 ;32 > i;i++){
if(piece.getPositionNameForGameBoardArray() == i){
gameBoard[i] = piece;

}

}

}

for(let piece of playerTwo.pieces){

for(let i =0;32 >i;i++){
if(piece.getPositionNameForGameBoardArray() == i){
gameBoard[i] = piece;
}

}

}

}


let gameBoard = [];
pushToGameboard();

function displayPieces(){
removeImgFromDiv();

let playerPiece;
updatePlayer(playerOne);
updatePlayer(playerTwo);


}



function removeImgFromDiv() {
let gameBoardImages = document.querySelectorAll(`#gameBoard img`)
for(let gameBoardImage of gameBoardImages){
gameBoardImage.parentNode.removeChild(gameBoardImage);
}
}

function  updatePlayer(player){

for(let i = 0;player.pieces.length > i; i++){
let img = document.createElement('img');
img.src = `images/${player.nameForImage}`;
img.id = `${player.pieces[i].getPositionNameForId()}`;
img.addEventListener('click', selectMovement);
document.querySelector(`#${player.pieces[i].getPositionNameForId()}`).appendChild(img);
}
}



displayPieces();



function selectMovement(event){

if(mode = 'selectPlayer'){
let currentPiece = returnPiece(event);
mode = 'movePlayer';
let spots = document.querySelectorAll(' gameBoard blackPiece ');
}
}


function returnPiece(event){
for(let playerOnePiece of playerOne.pieces){
if(playerOnePiece.getPositionNameForId() == event.target.id)
return playerOnePiece;
}


for(let playerTwoPiece of playerTwo.pieces){
if(playerTwoPiece.getPositionNameForId() == event.target.id)
return playerTwoPiece;
}

}
