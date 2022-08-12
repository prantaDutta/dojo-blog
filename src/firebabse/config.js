import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3dBbQOyUUsivwp9M6gg2yT1FSgCLUSMQ",
    authDomain: "udemy-vue-firebase-sites-5a8e5.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-5a8e5",
    storageBucket: "udemy-vue-firebase-sites-5a8e5.appspot.com",
    messagingSenderId: "381085652339",
    appId: "1:381085652339:web:2e39bbbb19a66056482106"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp}