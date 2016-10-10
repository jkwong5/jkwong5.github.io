  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDFWPuIN2KQvBRCG2LdcMkKoEg9E4Ayeko',
    authDomain: 'githubio-abe13.firebaseapp.com',
    databaseURL: 'https://githubio-abe13.firebaseio.com',
    storageBucket: '',
  };
  firebase.initializeApp(config);

  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imagesRef = storageRef.child('images');
  var database = firebase.database();
  var rootRef = firebase.database().ref();

  var currentData = document.getElementById('classData');
  var titleRef = rootRef.child('title');
  var bodyRef = rootRef.child('Class1/body');
  var dataRef = firebase.database().ref('Class1');
  bodyRef.on('value', function(snapshot){
    currentData.innerText = snapshot.val();
  });