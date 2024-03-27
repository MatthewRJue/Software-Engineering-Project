import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object obtained from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyB6Mz_xMspn4SYqOqd5awsk_NH294s_gKA",
  authDomain: "cinema-web-app-f8179.firebaseapp.com",
  projectId: "cinema-web-app-f8179",
  storageBucket: "cinema-web-app-f8179.appspot.com",
  messagingSenderId: "861524653331",
  appId: "1:861524653331:web:16e9a13119c3f0735a96e6",
  measurementId: "G-112BG5XD9X"
};

const firebaseApp = initializeApp(firebaseConfig);

// Create a Firestore instance to interact with Firestore database
const db = getFirestore(firebaseApp);

export { firebaseApp, db };