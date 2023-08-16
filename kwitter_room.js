
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDj46AlKgC1N3_y5i22-8NzrqFe3iQVf_E",
      authDomain: "kwitter-69021.firebaseapp.com",
      databaseURL: "https://kwitter-69021-default-rtdb.firebaseio.com/",
      projectId: "kwitter-69021",
      storageBucket: "kwitter-69021.appspot.com",
      messagingSenderId: "867362839308",
      appId: "1:867362839308:web:b23f9cd53cb36e7ba68729"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "Bienvenido" +  user_name;
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room Name - "+ Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      });});}
getRoom();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "addig room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(nmae);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

