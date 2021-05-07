import Firebase from "firebase";

const firebaseConfig={
    apikey:"AIzaSyBDiTAtmR4xUFzXViFwYifycEwBUbOvf4g",
    databaseURL:"https://chatapp-8b9c2-default-rtdb.firebaseio.com/",
    projectId:"chatapp-8b9c2",
    appId:"1:42320491495:android:a93bf97fd00a9c9eb44342",
}

export default Firebase.initializeApp(firebaseConfig);