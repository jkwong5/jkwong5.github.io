(function() {

// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDFWPuIN2KQvBRCG2LdcMkKoEg9E4Ayeko',
    authDomain: 'githubio-abe13.firebaseapp.com',
    databaseURL: 'https://githubio-abe13.firebaseio.com',
    storageBucket: 'githubio-abe13.appspot.com',
    messagingSenderId: '890366495335'
  };
  firebase.initializeApp(config);


  // var database = firebase.database();
  //
  // var title = $('title');
  // var dbRef = firebase.database().ref().child('title');
  // dbRef.on('value', function(snapshot) {
  //   updateTitle = snapshot.val().updateTitle;
  // });


// var storage = firebase.storage();
// var storageRef = storage.ref();
// var imagesRef = storageRef.child('images');
// var database = firebase.database();
// var rootRef = firebase.database().ref();
//
// var currentData = document.getElementById('skillsData');
// var titleRef = rootRef.child('0');
// var bodyRef = rootRef.child('0/project');
// var dataRef = firebase.database().ref('0');
// bodyRef.on('value', function(snapshot){
//   currentData.innerText = snapshot.val();
// });

const preObject = document.getElementById('skillsData');
const skillsList = document.getElementById('list');
const projectsList = document.getElementById('projectList');
//
const dbRefObject = firebase.database().ref('project');
const dbSkillsList = firebase.database().ref('object').child('skills');
const dbProjectsList = dbRefObject.child('projects');

dbRefObject.on('value', snap => {
  // preObject.innerText = JSON.stringify(snap.val(), null, 3);
  localStorage.setItem('rawData', JSON.stringify(snap.val(), null, 3));
});

dbSkillsList.on('child_added', snap =>
{
  const li = document.createElement('li');
  li.innerText = snap.val();
  li.id = snap.key;
  skillsList.appendChild(li);
});
// console.log(snap.val()));

// dbProjectsList.on('child_added', snap =>
// // console.log(snap.val()));
// {
//   const li = document.createElement('li');
//   li.innerText = snap.val();
//   li.id = snap.key;
//   projectsList.appendChild(li);
// });

dbSkillsList.on('child_changed', snap => {
  const liChanged = document.getElementById(snap.Key);
  liChanged.innerText = snap.val();
});

dbProjectsList.on('child_changed', snap => {
  const liChanged = document.getElementById(snap.Key);
  liChanged.innerText = snap.val();
});

dbSkillsList.on('child_removed', snap => {
  const liRemoved = document.getElementById(snap.Key);
  liRemoved.remove();
});

dbProjectsList.on('child_removed', snap => {
  const liRemoved = document.getElementById(snap.Key);
  liRemoved.remove();
});

}());
