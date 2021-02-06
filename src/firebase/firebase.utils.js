import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYARcINSfvHJj1rp5MEUuz_suLDk5uwUQ",
  authDomain: "clothing-ecom-db-d18ea.firebaseapp.com",
  projectId: "clothing-ecom-db-d18ea",
  storageBucket: "clothing-ecom-db-d18ea.appspot.com",
  messagingSenderId: "185106703363",
  appId: "1:185106703363:web:d3442feda4a189d1211a36",
  measurementId: "G-C95YJM53BS",
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
