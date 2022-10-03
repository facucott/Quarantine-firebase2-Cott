import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB6NjmfF--Sud6qeY-qS0AmP7mQ56ePewE",
  authDomain: "quarantine-shop-cott.firebaseapp.com",
  projectId: "quarantine-shop-cott",
  storageBucket: "quarantine-shop-cott.appspot.com",
  messagingSenderId: "443173175941",
  appId: "1:443173175941:web:ec8dfc5f2541fe95ee5fec"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);