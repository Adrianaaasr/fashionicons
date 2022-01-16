let icon = new Icon();
icon.initializeGallery();

const artPieces = icon.getPieces();

function showInfoByClickButton(){
  alert( artPieces[0].getDescription() )
};

