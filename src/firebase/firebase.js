import config from "./config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// export const Firebase

const Firebase = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export default Firebase;
// export const db = Firebase.firestore();
// export const Auth = Firebase.auth();
