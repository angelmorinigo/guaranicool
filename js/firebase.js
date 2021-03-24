
var provider = new firebase.auth.GoogleAuthProvider();

$('#loginGoogle').click(function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
   var name = user.displayName;
   var email = user.email;
   
    console.log(user);
    console.log("NOmbreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"+name);
    console.log("Email"+email);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 
});

const providerf = new firebase.auth.FacebookAuthProvider();
// Login with Facebook
$('#loginFacebook').click(function(){
  firebase.auth().signInWithPopup(providerf).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


});

//******************************************************** */

// SingIn
const signInForm = document.querySelector("#signinForm");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    // clear the form
    signInForm.reset();
    // close the modal
    $("#signinModal").modal("hide");
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
 console.log("aaaaaaaaaaaaaaaaaaaa:::::::::::::aaaaa"+name);
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
console.log("logueado y rediriginedo...");
    window.location.href = "dashboard/index.html";

  } else {
    // No user is signed in.
  }
});



//Observer
var user = firebase.auth().currentUser;
if (user) {
  // User is signed in.
  console.log("OBSERVER rediriginedo...");
  window.location.href = "dashboard/index.html";
} else {
  // No user is signed in.
}