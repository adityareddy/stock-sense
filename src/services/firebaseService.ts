import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJjdX1SAOykNVV5cVHPGQ15aT7Qnl9e5c",
  authDomain: "appr-99c74.firebaseapp.com",
  databaseURL: "https://appr-99c74-default-rtdb.firebaseio.com",
  projectId: "appr-99c74",
  storageBucket: "appr-99c74.appspot.com",
  messagingSenderId: "646136674546",
  appId: "1:646136674546:web:978df234015fd4fa6c386b",
  measurementId: "G-EHWCWKM4R6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };