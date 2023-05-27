// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3zOLgpUa5Zx266aBeBwo8frW4MCQ7Pks",
  authDomain: "restro-web.firebaseapp.com",
  projectId: "restro-web",
  storageBucket: "restro-web.appspot.com",
  messagingSenderId: "377708119938",
  appId: "1:377708119938:web:9298a4d6a3f2153907719b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app