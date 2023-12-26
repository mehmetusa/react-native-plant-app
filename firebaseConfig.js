import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApxllBMRoLY7qYidJ-mIZlOMZZ3Izhwjw",
  authDomain: "mario12.firebaseapp.com",
  projectId: "mario12",
  storageBucket: "mario12.appspot.com",
  messagingSenderId: "183817969545",
  appId: "1:183817969545:web:dda8cd15aa81406bdf8b58"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
