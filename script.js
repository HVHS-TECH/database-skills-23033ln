/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloworld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
  
}


function fb_readHighScores( ){
console. log("Reading High scores");
firebase.database().ref('/highScores/game1' ).once('value', databaseOutput, fb_error)
}

highscoreTable = {
  game1: {
    users: {
     lukas: 12324432523545245,
      Coby: 12343567891234567890,
      Pasha: 897,
      Josh: 322323,
      Callum: 123456789123456
    }

  },

 game2 :{
    users: {
      lukas: 23266476645656,
      Coby: 16465464654,
      Pasha: 64565464567,
      Josh: 35464565464,
      Callum: 64564564512

    } 

  }

}

firebase.database().ref('/').set(highscoreTable)

function goodbye() {
  console.log("Running goodbye()")
  firebase.database().ref('/').set(
    {
      message: '"Goodbye/ka kite āno'

    }
  )
}

function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead);
  console.log("Leaving simpleRead")
}

function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}

function display(snapshot) {
  var dbData = snapshot.val();
  firebase.database().ref('/').child('message').once('value', displayfb_readError);
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }

  else {
    console.log("The message is: " + dbData)

  }
}


function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead)
}

