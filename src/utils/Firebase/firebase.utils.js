import { initializeApp } from "firebase/app"

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxBY6CkqOBLUtCcV3es3UzWL3PKa4_G4o",
    authDomain: "crown-clothing-e062e.firebaseapp.com",
    projectId: "crown-clothing-e062e",
    storageBucket: "crown-clothing-e062e.appspot.com",
    messagingSenderId: "606887971722",
    appId: "1:606887971722:web:42f654812b603db37e1673",
    measurementId: "G-9N5BMH31R7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

 const provider = new GoogleAuthProvider()
 provider.setCustomParameters({
    prompt: 'select_account'
 })

 export const auth = getAuth()
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

 // Database

 export const db = getFirestore()

 export const createUserDocumentFromAuth = async (userData, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userData.uid) 
    const userSnapshop = await getDoc(userDocRef) // Check if user exists in db
    if (!userSnapshop.exists()) {
        const { displayName, email } = userData
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating user',error)
        }
    } 
    return userDocRef
 }

 export const signUpWithGoogleEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signInWithGoogleEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
 }

 export const signUserOut = async () => await signOut(auth)

 export const onAuthStateChangeListner = (callBack) => onAuthStateChanged(auth, callBack)