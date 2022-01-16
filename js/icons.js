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
  }
}


