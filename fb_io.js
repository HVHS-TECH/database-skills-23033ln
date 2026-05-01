/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}

function fb_readHighScores ( ){
console. log("Reading High scores");
firebase.database( ).ref( '/highScores/game1' )
.once( 'value', fb_displayHighScores. fb_error);

}

function fb_displayHighScores (snapshot) {
snapshot. forEach(fb_showOneScore)

}

function fb_showOneScore(child) {
console. log(child.val());

}

