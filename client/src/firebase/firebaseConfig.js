import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDvmcA2R7zyS3_8ARl1R9eLbw5tDNpvRA8",
    authDomain: "ezasco-file-storage.firebaseapp.com",
    projectId: "ezasco-file-storage",
    storageBucket: "ezasco-file-storage.appspot.com",
    messagingSenderId: "705703991917",
    appId: "1:705703991917:web:901274b08b8a42f929fd64",
    measurementId: "G-70M5TJWMXB"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };