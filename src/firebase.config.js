// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4WT4OAeogkUN2wRvlGJncPxKHEXHtQs",
  authDomain: "saitama-event-corporation.firebaseapp.com",
  projectId: "saitama-event-corporation",
  storageBucket: "saitama-event-corporation.appspot.com",
  messagingSenderId: "668731818467",
  appId: "1:668731818467:web:bb1ae030b331ccde4de0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth