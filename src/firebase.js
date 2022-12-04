// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkPTQ5KHW7FM4JbWFhtGc8ZmdyRDUJtGs",
  authDomain: "handsome-romeo.firebaseapp.com",
  projectId: "handsome-romeo",
  storageBucket: "handsome-romeo.appspot.com",
  messagingSenderId: "310792183201",
  appId: "1:310792183201:web:e251efd75e092e72d53fe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
