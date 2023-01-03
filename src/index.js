import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnxHBNhgsoFOALt3efmQ3UnjtYKkh_CMA",
  authDomain: "proyecto-react-patricio-riel.firebaseapp.com",
  projectId: "proyecto-react-patricio-riel",
  storageBucket: "proyecto-react-patricio-riel.appspot.com",
  messagingSenderId: "630386239073",
  appId: "1:630386239073:web:caae3732e4862807202c20"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);