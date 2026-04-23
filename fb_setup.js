/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
  apiKey: "AIzaSyAJgsVQhp8Y3JEHcoy9a2frecPmwqNxJ8k",
  authDomain: "lukas-ngan-12comp.firebaseapp.com",
  databaseURL: "https://lukas-ngan-12comp-default-rtdb.firebaseio.com",
  projectId: "lukas-ngan-12comp",
  storageBucket: "lukas-ngan-12comp.firebasestorage.app",
  messagingSenderId: "869637604136",
  appId: "1:869637604136:web:93e2c9d61d10a51237061d",
  measurementId: "G-7GZHJR55WJ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
