import * as firebase from 'firebase/app'


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.4/firebase-analytics.js"></script>

<script>
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
</script>