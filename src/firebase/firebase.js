import config from './config';
import firebase from "firebase";

// export const Firebase

const Firebase = firebase.initializeApp(config);
export const db = Firebase.firestore();
export const Auth = Firebase.auth();
