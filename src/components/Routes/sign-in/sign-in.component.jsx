import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from "../../../utils/Firebase/firebase.utils"

import { getRedirectResult } from "firebase/auth"
import { useEffect } from "react"

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGoogleRedirect()
        console.log(user)
    }

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        response && createUserDocumentFromAuth(response.user)
    },[])

    return (
        <div>
            <button onClick={logGoogleUser} >Sign-in</button>
            <h1>Sign in component</h1>
        </div>
    )
}

export default SignIn