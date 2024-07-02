import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDzAr5adeOfaKIWIaVVrkzWw9cZ1XUS5vU",
    authDomain: "ezasco-storage.firebaseapp.com",
    projectId: "ezasco-storage",
    storageBucket: "ezasco-storage.appspot.com",
    messagingSenderId: "147715898677",
    appId: "1:147715898677:web:d9e25fb781c6d0328fe07c",
    measurementId: "G-MP06YBETLC"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };