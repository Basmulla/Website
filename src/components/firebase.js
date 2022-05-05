import firebase from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-compat-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-compat-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyB1zWnTfYd2qDElOB2LN6jjWPLsLyyMZlw",
  authDomain: "portfolio-58204.firebaseapp.com",
  databaseURL: "https://portfolio-58204-default-rtdb.firebaseio.com",
  projectId: "portfolio-58204",
  storageBucket: "portfolio-58204.appspot.com",
  messagingSenderId: "522841677852",
  appId: "1:522841677852:web:beeab2b4e5029902cb3fd9"
};

firebase.initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

rootRef = firebase.firestore().ref();
console.log(rootRef)

export default firebase;