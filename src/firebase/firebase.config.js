// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variable', import.meta.env.VITE_APIKEY) 

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,



  // apiKey: "AIzaSyC9v6IeFxcqw6tnqcq6OzmqgAPq-xofVyQ",
  // authDomain: "the-news-dragon-a78a0.firebaseapp.com",
  // projectId: "the-news-dragon-a78a0",
  // storageBucket: "the-news-dragon-a78a0.appspot.com",
  // messagingSenderId: "315782685512",
  // appId: "1:315782685512:web:304c1989bd5fc14360c97d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;