import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';


firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
})


export const firestore = firebase.firestore();
export const analytics = firebase.analytics();