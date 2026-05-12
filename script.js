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


function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}


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


console.log(person["eyeColor"])
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["age"])
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

function fb_displayHighScoretable(snapshot) {
  let highScores = snapshot.val()
  console.log("Coby  got " + highscoreTable["Coby"] + " points")

}

function fb_readHighScoretable() {
  console.log("Reading High scores");
  firebase.database().ref('/game1  /user').once('value', fb_displayHighScores, fb_readError)
}

//for(i = 0; i < names. length; i++){
//let key = names[i];
//console. log( "Score "+i+" is for "+ key)
//}
let names = ["lukas", "Coby", "Pasha", "Josh", "Callum"]

function fb_highScoretable() {
  for (let i = 0; i < names.length; i++) {
    let key = names[i];
    console.log("User " + i + " " + key + " has the score of. " + highscoreTable['game1']['users'][key] + " points.")
  }
}



function fb_readHighScoretable() {
  console.log("Reading High scores");
  firebase.database().ref('/highScoretable/game1')
    .once('value', fb_displayHighScores.fb_readError);

}

function fb_displayHighScoretable(snapshot) {
  snapshot.forEach(fb_showOneScore)

}

function fb_showOneScore(child) {
  console.log(child.key + " got " + child.val() + " points");

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

  game2: {
    users: {
      lukas: 23266476645656,
      coby: 16465464654,
      pasha: 64565464567,
      josh: 35464565464,
      callum: 64564564512

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
  let text = "";
  for (let [usernames, score] of Object.entries(dbData)) {
    text += usernames + ": " + score + "<br>";
  }
  HTML_OUTPUT.innerHTML = text
}


function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead)
}

var GLOBAL_user;

function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user;
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}

function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User has logged in")
  });
}


