import firebase from 'firebase/app';
import 'firebase/storage';

// Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "pethotel-eef4d.firebaseapp.com",
    databaseURL: "https://pethotel-eef4d.firebaseio.com",
    projectId: "pethotel-eef4d",
    storageBucket: "pethotel-eef4d.appspot.com",
    messagingSenderId: "337456303186",
    appId: "1:337456303186:web:6072d99025fb2db125a38b"
  };

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage(); 

export{
    storage, firebase as default
}