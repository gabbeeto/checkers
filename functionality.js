class playerPiece{
constructor(yPosition, xPosition ,order ){
this.xPosition = xPosition;
this.yPosition = yPosition;
this.order = order;
}

getPositionName(){
switch(this.yPosition){
	case 1:
		return `h${this.xPosition}`;
	case 2:
		return `g${this.xPosition}`;
	case 3:
		return `f${this.xPosition}`;
	case 4:
		return `e${this.xPosition}`;
	case 5:
		return `d${this.xPosition}`;
	case 6:
		return `c${this.xPosition}`;
	case 7:
		return `b${this.xPosition}`;
	case 8:
		return `a${this.xPosition}`;
}



}

moveDiagonallyToLeft(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.yPosition - 1;
displayPieces(playerOne);
}

else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.yPosition - 1;
displayPieces(playerTwo);
}

}  

}





let playerOne = {
	nameForImage: 'playerOne.png',
	nameForKingImage: 'playerOneKing.png',
	pieces: [new playerPiece(1,1, 'one'), new playerPiece(1,3, 'one'), new playerPiece(1,5, 'one'), new playerPiece(1,7, 'one'),new playerPiece(2,2, 'one'),new playerPiece(2,4,'one'),new playerPiece(2,6,'one'),new playerPiece(2,8,'one'),new playerPiece(3,1,'one'), new playerPiece(3,3,'one'), new playerPiece(3,5,'one'), new playerPiece(3,7,'one')]
}


let playerTwo = {
	nameForImage: 'playerTwo.png',
	nameForKingImage: 'playerTwoKing.png',
	pieces: [new playerPiece(8,2,'two'),new playerPiece(8,4,'two'),new playerPiece(8,6,'two'),new playerPiece(8,8,'two'), new playerPiece(7,1,'two'), new playerPiece(7,3,'two'), new playerPiece(7,5,'two'), new playerPiece(7,7,'two'),new playerPiece(6,2,'two'),new playerPiece(6,4,'two'),new playerPiece(6,6,'two'),new playerPiece(6,8,'two')]
}


function displayPieces(player){
let playerPiece;
for(let i = 0;player.pieces.length > i; i++){
img = document.createElement('img');
img.src = `images/${player.nameForImage}`;
console.log(`position: ${player.pieces[i].getPositionName()}`)
document.querySelector(`#${player.pieces[i].getPositionName()}`).appendChild(img)

}

}
displayPieces(playerOne);
displayPieces(playerTwo);

playerOne.pieces[11].moveDiagonallyToLeft();
playerTwo.pieces[11].moveDiagonallyToLeft();
