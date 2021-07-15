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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('user account cant created', error.message);
        }
    }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;