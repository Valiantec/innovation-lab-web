// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBSorCDJrlOp_C1UJ9sSuhuoqX4bcU79j4',
    authDomain: 'sssd-innovation-lab.firebaseapp.com',
    projectId: 'sssd-innovation-lab',
    storageBucket: 'sssd-innovation-lab.appspot.com',
    messagingSenderId: '42322817682',
    appId: '1:42322817682:web:e400ac5ce76681d8082c4b',
    measurementId: 'G-NWQMZ7EVXS'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
