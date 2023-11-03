// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDdO4oyQ4Sp6eiWdHFpPxQEgTFRvW8600Q",
  authDomain: "anor-ecommerce.firebaseapp.com",
  projectId: "anor-ecommerce",
  storageBucket: "anor-ecommerce.appspot.com",
  messagingSenderId: "756146325789",
  appId: "1:756146325789:web:4cf19d8a50099b9ebff9f4"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;