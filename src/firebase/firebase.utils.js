import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBGFtP5hgPcqjUd5Ylf9FJQF0Dlgz72BBE",
    authDomain: "clothing-eco-db.firebaseapp.com",
    projectId: "clothing-eco-db",
    storageBucket: "clothing-eco-db.appspot.com",
    messagingSenderId: "158613671935",
    appId: "1:158613671935:web:0a2b33b2e3780a1f39e1ca",
    measurementId: "G-T5NX25S8QR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;