// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrHYeY4QyTRujd1LKLXP3bWF5aw70MMFY",
  authDomain: "dragon-news-resources-99b74.firebaseapp.com",
  projectId: "dragon-news-resources-99b74",
  storageBucket: "dragon-news-resources-99b74.appspot.com",
  messagingSenderId: "453817936688",
  appId: "1:453817936688:web:5d492253320bb0204c36f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;