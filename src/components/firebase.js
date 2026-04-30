import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1zWnTfYd2qDElOB2LN6jjWPLsLyyMZlw",
  authDomain: "portfolio-58204.firebaseapp.com",
  databaseURL: "https://portfolio-58204-default-rtdb.firebaseio.com",
  projectId: "portfolio-58204",
  storageBucket: "portfolio-58204.appspot.com",
  messagingSenderId: "522841677852",
  appId: "1:522841677852:web:beeab2b4e5029902cb3fd9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };
export default firebase;