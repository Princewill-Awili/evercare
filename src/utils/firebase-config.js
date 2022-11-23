import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyC0RgYT0aOix48FIj9NjU7an-vy82SztXg",
     authDomain: "evercare-portal.firebaseapp.com",
     projectId: "evercare-portal",
     storageBucket: "evercare-portal.appspot.com",
     messagingSenderId: "254960333396",
     appId: "1:254960333396:web:2f1d15926fe68aeb8cb3c1",
     measurementId: "G-4QP70VE4DQ"
   };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);