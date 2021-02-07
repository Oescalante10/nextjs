import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxbq-EoWr513VMe30_-aenTTf59f_rVNI",
    authDomain: "qieroapp-40b05.firebaseapp.com",
    databaseURL: "https://qieroapp-40b05.firebaseio.com",
    projectId: "qieroapp-40b05",
    storageBucket: "qieroapp-40b05.appspot.com",
    messagingSenderId: "322205023669",
    appId: "1:322205023669:web:242c272034e2e0feebadfc",
    measurementId: "G-Q5CVF9WDC2"
  };

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();