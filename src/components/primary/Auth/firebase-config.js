/*
 * File           : firebase-config.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:39:56 
 * Description    : <<description>>
 *       
 *       
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Dec 13 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQaOaWAr7yeiYp3ySJWPh8JsUCT5d9UaA",
  authDomain: "qunatigoaifblogin.firebaseapp.com",
  projectId: "qunatigoaifblogin",
  storageBucket: "qunatigoaifblogin.appspot.com",
  messagingSenderId: "927312315344",
  appId: "1:927312315344:web:8daf465b02e11f91256fd5",
  measurementId: "G-VMRCX9KQ7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

const analytics = getAnalytics(app);