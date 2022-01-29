import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyANx8a9zOb-wKJcieCovPpPMrv9jsNyjVI",
    authDomain: "maldal-be3ab.firebaseapp.com",
    projectId: "maldal-be3ab",
    storageBucket: "maldal-be3ab.appspot.com",
    messagingSenderId: "932579469022",
    appId: "1:932579469022:web:cbec3375fcb0aaf95c044f",
    measurementId: "G-YVRJ70ZXY4"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
