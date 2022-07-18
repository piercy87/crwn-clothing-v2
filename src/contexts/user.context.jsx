import { useEffect } from "react";
import { createContext, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListner } from "../utils/Firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListner((user) => {
            setCurrentUser(user)
            if (user) {
                createUserDocumentFromAuth(user)
            }
            console.log(user)}
            )
        return unsubscribe
    },[])

    const value = {
        currentUser, setCurrentUser
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}