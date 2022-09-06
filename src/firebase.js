/* eslint-disable import/no-anonymous-default-export */
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCLKdZ7Dj0j5oMlwgU8IwtLmt1YM3NtCKM",
  authDomain: "amz-clone-medium-ea034.firebaseapp.com",
  projectId: "amz-clone-medium-ea034",
  storageBucket: "amz-clone-medium-ea034.appspot.com",
  messagingSenderId: "631293429947",
  appId: "1:631293429947:web:a415d96617e02878d8019e",
  measurementId: "G-BNL7P96B42"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };