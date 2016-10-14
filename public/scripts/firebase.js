// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDFWPuIN2KQvBRCG2LdcMkKoEg9E4Ayeko',
  authDomain: 'githubio-abe13.firebaseapp.com',
  databaseURL: 'https://githubio-abe13.firebaseio.com',
  storageBucket: 'githubio-abe13.appspot.com',
  messagingSenderId: '890366495335'
};
firebase.initializeApp(config);

var storage = firebase.storage();
var storageRef = storage.ref();
var imagesRef = storageRef.child('images');
var database = firebase.database();
var rootRef = firebase.database().ref();

var currentData = document.getElementById('skillsData');
var titleRef = rootRef.child('0');
var bodyRef = rootRef.child('0/project');
var dataRef = firebase.database().ref('0');
bodyRef.on('value', function(snapshot){
  currentData.innerText = snapshot.val();
});
