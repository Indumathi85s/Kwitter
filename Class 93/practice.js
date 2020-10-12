
// ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9A15se-qHzT1AhXqJXT9lYdfl0JCVlxw",
  authDomain: "kwitter-71f25.firebaseapp.com",
  databaseURL: "https://kwitter-71f25.firebaseio.com",
  projectId: "kwitter-71f25",
  storageBucket: "kwitter-71f25.appspot.com",
  messagingSenderId: "681934842508",
  appId: "1:681934842508:web:dfe6831b91f73a360669a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;

  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    
  });
}


