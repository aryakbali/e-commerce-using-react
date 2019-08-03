import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    
        apiKey: "AIzaSyDZppo5odDjOoQ7jdi57YRvvgeY8T2voZ8",
        authDomain: "e-commerce9582.firebaseapp.com",
        databaseURL: "https://e-commerce9582.firebaseio.com",
        projectId: "e-commerce9582",
        storageBucket: "",
        messagingSenderId: "912254308512",
        appId: "1:912254308512:web:aad64255e1ebae17"
      
};
firebase.initializeApp(config);

//adding data to the database//
//we store the data in our databse but now we have //
//to store that data into our app  state so we can use it for our app//

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef; 
};
//
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;