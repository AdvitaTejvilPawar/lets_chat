firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
    window.location="index.html"}

    username=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name")

    function send(){
        msg=document.getElementById("msg").value ;
        firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
        })
            
     } 


    function getData() 
  { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
         document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
             childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if(childKey != "purpose") {
                 firebase_message_id = childKey;
                  message_data = childData; 
                 //Start code //End code

                 console.log(firebase_message_id);
                 console.log(message_data);

                name=message_data['name']
                message=message_data['message']
                like=message_data['like']

                name_tag="<h3>"+name+" <img class= 'user_tick' src= 'tick.png'></h3>"
                message_tag="<h4>"+message +"</h4>"
               
                like_button="<button class='btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>"
                span_with_tag="<span class= 'glyphicon glyphicon-thumbs-up'> like" +like+"</span></button><hr>"
               
                row= name_tag + message_tag+like_button+span_with_tag
                document.getElementById("output").innerHTML+= row

                
                 } });
                 }); 
                }
                  getData();

                  function updateLike(message_id){

                    button_id=message_id;
                    likes=document.getElementById(button_id).value
                    updated_likes=Number(likes)+ 1;
                    firebase.database().ref(room_name).child(message_id).update({
                      like: updated_likes
                    })

                  }