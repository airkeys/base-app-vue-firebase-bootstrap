import firebase from 'firebase'

//Setup Firebase
var config = {
    name: 'squares',
    apiKey: "AIzaSyASCvASbYbzaM8lNSL36ftBEFX-2X9VBm0",
    authDomain: "squares-5d66a.firebaseapp.com",
    databaseURL: "https://squares-5d66a.firebaseio.com",
    storageBucket: "squares-5d66a.appspot.com",
    messagingSenderId: "146851113786"
}

var db = firebase.initializeApp(config).database();

module.exports = db;