// FIREBASE EMAIL

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBchAhQJAc30QMwhVh7Id7QOfSdUIUyoC0",
  authDomain: "taylorrcode.firebaseapp.com",
  databaseURL: "https://taylorrcode.firebaseio.com",
  projectId: "taylorrcode",
  storageBucket: "taylorrcode.appspot.com",
  messagingSenderId: "131702243981",
  appId: "1:131702243981:web:2022ed6f4c85a6e9fdd8c4",
  measurementId: "G-H2PSCNKJ57",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference messages collection

var messagesRef = firebase.database().ref("messages");

//Listen for submit form

document.querySelector("#contactForm").addEventListener("submit", submitForm);

//Submit form

function submitForm(e) {
  e.preventDefault();

  //Get values

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  //Save message

  saveMessage(name, email, message);

  //Show alert
  document.querySelector(".alert").style.visibility = "visible";
  document.querySelector(".alert").style.opacity = "1";

  //Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.visibility = "hidden";
    document.querySelector(".alert").style.opacity = "0";
  }, 3000);

  document.getElementById("contactForm").reset();
}

//Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save Message to firebase

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
