import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDWjPsvDRla7iKDHSDBrz2a9DYwy1H8ZAg",
  authDomain: "otp-clothing.firebaseapp.com",
  databaseURL: "https://otp-clothing.firebaseio.com",
  projectId: "otp-clothing",
  storageBucket: "otp-clothing.appspot.com",
  messagingSenderId: "692198921518",
  appId: "1:692198921518:web:83fc87d3bccf7fb80c56bf",
  measurementId: "G-2CHL8VC7M1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
