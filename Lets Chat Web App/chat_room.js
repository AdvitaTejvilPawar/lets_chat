
const firebaseConfig = {
    apiKey: "AIzaSyAqprKqUeR_5hRtIty1c45m3RiG8lTXf-E",
    authDomain: "chris-11bdd.firebaseapp.com",
    databaseURL: "https://chris-11bdd-default-rtdb.firebaseio.com",
    projectId: "chris-11bdd",
    storageBucket: "chris-11bdd.appspot.com",
    messagingSenderId: "471073385384",
    appId: "1:471073385384:web:e4b777d616fd68239c4b9d",
    measurementId: "G-LL25S2HV3Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);












username=localStorage.getItem("user_name")
document.getElementById()



function addroom(){
    room_name=document.getElementById("room_name").value
    firebase.database().ref('/').child(room_name).update({
          purpose:'adding room'
    })
localStorage.setItem("room_name" , room_name)
window.location="chat_page.html"

    }
    function logout(){
        localStorage.removeItem("username")
        localStorage.removeItem("room_name")
        window.location="index.html"
  }
