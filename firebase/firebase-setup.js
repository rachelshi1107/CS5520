import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} from "@env";
import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} from "react-native-dotenv";

// Your web app's Firebase configuration
//const firebaseConfig = {
    //apiKey: apiKey,
    //authDomain: authDomain,
    //projectId: projectId,
    //storageBucket: storageBucket,
    //messagingSenderId: messagingSenderId,
    //appId: appId,
//};

const firebaseConfig = {
    apiKey: "AIzaSyDU7C6TUZ-T6K4UYj8-eJQCCxCB6z3Lds8",
    authDomain: "cs5520-demo.firebaseapp.com",
    projectId: "cs5520-demo",
    storageBucket: "cs5520-demo.appspot.com",
    messagingSenderId: "987374529232",
    appId: "1:987374529232:web:109a671452d1860dbc0cd5"
};

let myApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(myApp);
console.log(module.exports);