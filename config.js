import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDUoJ9Vwhwtpm_saMv_mq7lcgEnae8vqKw",
  authDomain: "book-santa-app-afcb9.firebaseapp.com",
  databaseURL: "https://book-santa-app-afcb9.firebaseio.com",
  projectId: "book-santa-app-afcb9",
  storageBucket: "book-santa-app-afcb9.appspot.com",
  messagingSenderId: "42371128825",
  appId: "1:42371128825:web:6b1281ea07e64a2e1bf128"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
