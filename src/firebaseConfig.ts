import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALzkMGLO17K5Pi_kBUmxV8oXVXhVyDwq8",
  authDomain: "bad-trip-advisor.firebaseapp.com",
  projectId: "bad-trip-advisor",
  storageBucket: "bad-trip-advisor.appspot.com",
  messagingSenderId: "671609131981",
  appId: "1:671609131981:web:318693d4baece853de2a84",
  measurementId: "G-47P7H4MY90",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
