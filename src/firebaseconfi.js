// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAafdDlghAJ_l8cXf-eVH2p9jr8zQjqsbQ",
  authDomain: "meetingdb-ecb9e.firebaseapp.com",
  projectId: "meetingdb-ecb9e",
  storageBucket: "meetingdb-ecb9e.appspot.com",
  messagingSenderId: "580326215937",
  appId: "1:580326215937:web:ef30873c42d5a46b908b00"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)



