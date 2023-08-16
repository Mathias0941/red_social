/*var firebaseConfig = {
    apiKey: "AIzaSyDj46AlKgC1N3_y5i22-8NzrqFe3iQVf_E",
    authDomain: "kwitter-69021.firebaseapp.com",
    databaseURL: "https://kwitter-69021-default-rtdb.firebaseio.com",
    projectId: "kwitter-69021",
    storageBucket: "kwitter-69021.appspot.com",
    messagingSenderId: "867362839308",
    appId: "1:867362839308:web:b23f9cd53cb36e7ba68729"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/

function addUser () {


    user_name = document.getElementById("user_name").value;
    /*firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });*/
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}