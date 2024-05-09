import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC5-3HQ-ZkISVVHl6UHoAZmuEBcYY9flBU",
  authDomain: "projeto-teste-2371d.firebaseapp.com",
  projectId: "projeto-teste-2371d",
  storageBucket: "projeto-teste-2371d.appspot.com",
  messagingSenderId: "768321852438",
  appId: "1:768321852438:web:4ad311a1c419dc5206d137",
  measurementId: "G-WYZX21K6TN"
}

const fireBaseApp = initializeApp(firebaseConfig)
const db = getFirestore(fireBaseApp)
const auth = getAuth(fireBaseApp)

export { db, auth };