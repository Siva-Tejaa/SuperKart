import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwfCoYLQnVcmLxuA-YaGdcXe7Gf1onpfg",
    authDomain: "superkart-a2ae0.firebaseapp.com",
    projectId: "superkart-a2ae0",
    storageBucket: "superkart-a2ae0.appspot.com",
    messagingSenderId: "279992371188",
    appId: "1:279992371188:web:ce93c49c407f2f8e59dba1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);

export { auth };