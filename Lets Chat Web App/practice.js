const firebaseConfig = {
  apiKey: "AIzaSyAqprKqUeR_5hRtIty1c45m3RiG8lTXf-E",
  authDomain: "chris-11bdd.firebaseapp.com",
  projectId: "chris-11bdd",
  storageBucket: "chris-11bdd.appspot.com",
  messagingSenderId: "471073385384",
  appId: "1:471073385384:web:e4b777d616fd68239c4b9d",
  measurementId: "G-LL25S2HV3Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){
  user_name=document.getElementById("username").value 
  firebase.database().ref('/').child(user_name).update({
      purpose:'adding user'
  })
}