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



let scoreObject = {
  "Coby": 1000,
  "Josh": 1001

}
console.log(
  scoreObject["Coby"]  
)

// the person//
var person = {
firstName: "Coby",
lastName: "Rollo",
age: 100000000000000000000,
eyeColor: "ghghghgh"
};
person["age"] = 20;


console. log(person["eyeColor"])
console.log(person["firstname"]) 
console.log(person["lastname"])
///////////////


//the start of the hello//
function helloWorld() {
  console.log("Running helloworld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )

}
//////////////////////////


function fb_displayHighScores(snapshot) {
  let highScores = snapshot.val()
  console.log("Coby Rollo  got " + highScores["Coby Rollo"] + " points")

}

function fb_readHighScores( ){
console. log( "Reading High scores");
firebase.database( ).ref('/game1  /user' ).once('value', fb_displayHighScores, fb_readError)
}
function fb_readHighScores() {
  console.log("Reading High scores");
  firebase.database().ref('/game1/user').once('value', displayRead, fb_readError)
}

//for(i = 0; i < names. length; i++){
//let key = names[i];
//console. log( "Score "+i+" is for "+ key)
//}

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

  game2: {
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

function advancedRead() {
  console.log("Reading message");
  firebase.database().ref('game1/users').on('value', display, fb_readError)
}

function display(snapshot) {
  let dbData = snapshot.val();
  console.log(dbData);
  for () {
  }
}


function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead)
}

