var auth = firebase.auth();
var google = new firebase.auth.GoogleAuthProvider();

auth.onAuthStateChanged(onAuth);
$("#btLogin").click(onLogin);
$("#btLogout").click(onLogout);


function onAuth(r) {
  user = r;
  if(user) {
     console.log('login done');
     $('.header').html('<p>'+user.uid+'</p>');
  }
  else {
     console.log('login not');
  }
}

function onLogin() {
    auth.signInWithPopup(google);
}
function onLogout() {
    auth.signOut();
}