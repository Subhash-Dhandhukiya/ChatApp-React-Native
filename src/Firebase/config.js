import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjl9aszKX5YMHkWAj1qBs-rDkhnMgBhek",
    authDomain: "chatapp-8b9c2.firebaseapp.com",
    databaseURL: "https://chatapp-8b9c2-default-rtdb.firebaseio.com",
    projectId: "chatapp-8b9c2",
    storageBucket: "chatapp-8b9c2.appspot.com",
    messagingSenderId: "42320491495",
    appId: "1:42320491495:web:17125b26f9b5be1bb44342",
    measurementId: "G-QPDX0PY28P"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);