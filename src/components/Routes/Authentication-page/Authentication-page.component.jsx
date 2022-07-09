import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    auth,
} from "../../../utils/Firebase/firebase.utils"
import './authentication-page.styles.scss'

import { getRedirectResult } from "firebase/auth"
import { useEffect } from "react"
import SignUpForm from "../../Sign-up-form/Sign-up-form.component"
import Button from "../../Lib/Button/Button.component"
import SignIn from "../../sign-in/Sign-in.component"

const AuthenticationPage = () => {

    

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        response && createUserDocumentFromAuth(response.user)
    },[])

    return (
        <div className='authentication-page-container'>
            <SignIn  />
            <SignUpForm />
        </div>
    )
}

export default AuthenticationPage