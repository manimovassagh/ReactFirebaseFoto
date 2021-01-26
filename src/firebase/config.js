import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firebase-firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {
    apiKey: "AIzaSyDlZQoysbiL3sLrzVQP4PfGBX2cUUK0ejU",
    authDomain: "fotoalbum-3f2f4.firebaseapp.com",
    projectId: "fotoalbum-3f2f4",
    storageBucket: "fotoalbum-3f2f4.appspot.com",
    messagingSenderId: "162126570295",
    appId: "1:162126570295:web:ed233a695ba5a74dc8f0b2",
    measurementId: "G-8LY3KEJ8VN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
