class Museum{
    constructor(){
      this.pieces = [];
    }
    getPieces(){
      return this.pieces
    }
    setPieces( pieces ){
      this.pieces = pieces;
    }
    initializeGallery(){
      let piece1 = new Piece("./img/Coco-Chanel.jpg", "With her trademark suits and little black dresses, fashion designer Coco Chanel created timeless designs that are still popular today.");
      this.pieces.push( piece1 );
    }
    /*initializeGallery(){
        let piece2 = new Piece("./img/D&G", " Is an Italian luxury fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.");
        this.pieces.push( piece2 );
      }*/
  }