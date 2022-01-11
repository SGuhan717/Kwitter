const firebaseConfig = {
      apiKey: "AIzaSyClYWeo6Z9HZG4dnVlRxdWG8mruAwiVBOU",
      authDomain: "class---93-a1d10.firebaseapp.com",
      databaseURL: "https://class---93-a1d10-default-rtdb.firebaseio.com",
      projectId: "class---93-a1d10",
      storageBucket: "class---93-a1d10.appspot.com",
      messagingSenderId: "920749921891",
      appId: "1:920749921891:web:4d08a858c3fcffead08a56"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {

        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child("room_name").update({
              purpose: "adding room name"
        });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_names -" + Room_names);
      row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}