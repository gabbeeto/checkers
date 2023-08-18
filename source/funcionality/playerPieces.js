


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





