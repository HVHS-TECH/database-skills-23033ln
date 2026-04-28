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
function helloWorld(){
  console.log("Running helloworld()")
  firebase.database().ref('users/ben').set(
    {
      message: 'Kia ora te ao'
    }
  )
}
function goodbye(){
  console.log("Running goodbye()")
  firebase.database().ref('users/ben').set(
    {
      message: '"Goodbye/ka kite āno'
    }
  )
}
function Do_This(){
  firebase.database().ref('/message').once('value', Do_This){
    {
     console.log(snapshot.val())
    }
  }
}