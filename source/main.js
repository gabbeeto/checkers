import './styling/style.css'
import playerOneImg from './img/playerOne.png'
import playerTwoImg from './img/playerTwo.png'
import playerOneKingImg from './img/playerOneKing.png'
import playerTwoKingImg from './img/playerTwoKing.png'

import playerPiece from './funcionality/playerPieces.js'



let mode = 'selectPlayer';



 let playerOne = {
	nameForImage: playerOneImg,
	nameForKingImage: playerOneKingImg,
	pieces: [new playerPiece(1,1, 'one'), new playerPiece(1,3, 'one'), new playerPiece(1,5, 'one'), new playerPiece(1,7, 'one'),new playerPiece(2,2, 'one'),new playerPiece(2,4,'one'),new playerPiece(2,6,'one'),new playerPiece(2,8,'one'),new playerPiece(3,1,'one'), new playerPiece(3,3,'one'), new playerPiece(3,5,'one'), new playerPiece(3,7,'one')]
}


let playerTwo = {
	nameForImage: playerTwoImg,
	nameForKingImage: playerTwoKingImg,
	pieces: [new playerPiece(8,2,'two'),new playerPiece(8,4,'two'),new playerPiece(8,6,'two'),new playerPiece(8,8,'two'), new playerPiece(7,1,'two'), new playerPiece(7,3,'two'), new playerPiece(7,5,'two'), new playerPiece(7,7,'two'),new playerPiece(6,2,'two'),new playerPiece(6,4,'two'),new playerPiece(6,6,'two'),new playerPiece(6,8,'two')]
}





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
img.src = player.nameForImage;
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
