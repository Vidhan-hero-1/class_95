
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem(user_name, "user_name");
      document.getElementById("user_name").innerHTML = "welcome"
 + user_name + "!"
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
            {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -  "+ Room_Names);
       row = "<div class = 'room_name' id="+Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
       document.getElementById("output").InnerHTML = row;

      
      //End code
      });});}
getData();

function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
      });
      localStorage.setItem(room_name , "room_name");

         window.location  = "kwitter_room.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage("room_name" , name);
      window.location = "kwitter_page.html"
}