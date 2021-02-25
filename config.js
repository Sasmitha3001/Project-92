import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB4sMs0SSe33rN5ONvJbj5IPuK-vnA5Xao",
    authDomain: "online-vidya.firebaseapp.com",
    projectId: "online-vidya",
    storageBucket: "online-vidya.appspot.com",
    messagingSenderId: "599304372581",
    appId: "1:599304372581:web:5f592b81489166ed99618c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore