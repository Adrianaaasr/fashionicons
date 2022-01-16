class Icon{
  constructor(){
    this.pieces = [];
  }
  getPieces(){
    return this.pieces
  }
  setPieces( pieces ){
    this.pieces = pieces;
  }
  initializeGallery() {
    let piece1 = new Piece("./img/Coco-Chanel.jpg", "Fashion changes, but style endures.");
    this.pieces.push( piece1 );

    let piece2 = new Piece("./img/D&G.jpg", "I don't believe in fashion. I believe in costume. Life is too short to be same person every day.”");
    this.pieces.push( piece2 );
  }
}

/*How can I identify each button for they to make differents functions?*/


