import config from './config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// export const Firebase

const Firebase = firebase.initializeApp(config);


export default Firebase;
// export const db = Firebase.firestore();
// export const Auth = Firebase.auth();
