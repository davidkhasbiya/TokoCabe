// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfp6PILJ1WucZ9xDO9eW4DubsIyJWXmN8",
    authDomain: "marketplace-cabai.firebaseapp.com",
    projectId: "marketplace-cabai",
    storageBucket: "marketplace-cabai.firebasestorage.app",
    messagingSenderId: "388305361214",
    appId: "1:388305361214:web:4c16611e20eb8f4811f46f",
    measurementId: "G-PTVH16GSW2"
};

/// 1. Inisialisasi Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 2. Inisialisasi Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 3. Inisialisasi Analytics dengan pengecekan environment
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { auth, googleProvider, analytics };
