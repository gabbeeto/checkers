
export default class playerPiece{
constructor(yPosition, xPosition ,order ){
this.xPosition = xPosition;
this.yPosition = yPosition;
this.order = order;
}

getPositionNameForGameBoardArray(){
let y = (this.yPosition -1) * 4;
let x = this.xPosition;
return y + x;

}

getPositionNameForId(){
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


moveDiagonallyToLeftToKill(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition - 2;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition - 2;
displayPieces();
}

}  




moveDiagonallyToLeft(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition - 1;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition - 1;
displayPieces();
}

}  


moveDiagonallyToLeftToKill(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition + 2;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition + 2;
displayPieces();
}

}  




moveDiagonallyToRight(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition + 1;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition + 1;
displayPieces();
}

}  

}





export let playerOne = {
	nameForImage: 'playerOne.png',
	nameForKingImage: 'playerOneKing.png',
	pieces: [new playerPiece(1,1, 'one'), new playerPiece(1,3, 'one'), new playerPiece(1,5, 'one'), new playerPiece(1,7, 'one'),new playerPiece(2,2, 'one'),new playerPiece(2,4,'one'),new playerPiece(2,6,'one'),new playerPiece(2,8,'one'),new playerPiece(3,1,'one'), new playerPiece(3,3,'one'), new playerPiece(3,5,'one'), new playerPiece(3,7,'one')]
}


export let playerTwo = {
	nameForImage: 'playerTwo.png',
	nameForKingImage: 'playerTwoKing.png',
	pieces: [new playerPiece(8,2,'two'),new playerPiece(8,4,'two'),new playerPiece(8,6,'two'),new playerPiece(8,8,'two'), new playerPiece(7,1,'two'), new playerPiece(7,3,'two'), new playerPiece(7,5,'two'), new playerPiece(7,7,'two'),new playerPiece(6,2,'two'),new playerPiece(6,4,'two'),new playerPiece(6,6,'two'),new playerPiece(6,8,'two')]
}

