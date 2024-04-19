const firebaseConfig = {
    apiKey: "AIzaSyCl8HG4b9J3A2KtljagBGGIHdQOIQBkDKI",
    authDomain: "sids-chat-world.firebaseapp.com",
    projectId: "sids-chat-world",
    storageBucket: "sids-chat-world.appspot.com",
    messagingSenderId: "928502487847",
    appId: "1:928502487847:web:8a1e616ebec12338832702"
  };
  
  // Initialize Firebase
  firebase = initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();
