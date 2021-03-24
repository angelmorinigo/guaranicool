


const signInFormLogout = document.querySelector("#form-logout");
signInFormLogout.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("entre en salir.js");
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Salio correctamente");
    window.location.href = "/guaranicool";
  }).catch(function(error) {
    // An error happened.
    alert(error);
  });
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; 
  document.getElementById('name').innerHTML=name;
 console.log(":::::::::::::aaaaa"+name);
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
  

  } else {
    // No user is signed in.
  }
});

