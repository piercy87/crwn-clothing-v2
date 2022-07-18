import { useState } from "react"
import Button from "../Lib/Button/Button.component"
import FormInput from "../Lib/form-input/Form-input.component"
import { signInWithGooglePopup, signInWithGoogleEmailAndPassword } from "../../utils/Firebase/firebase.utils"
import './sign-in.styles.scss'

const defaultValues = {
    email: '',
    password: ''
}

const SignIn = ({}) => {

    const resetFields = () => setSignInValues(defaultValues)

    const [ signInValues, setSignInValues ] = useState(defaultValues)
    const { email, password } = signInValues

    const handleChange = (e) => { 
        const { name, value } = e.target
        setSignInValues({ ...signInValues, [name]:value })
    }

    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup()
        } catch (error) {
            alert(error.code)
        }
        
    }

    const handleSignInWithEmailAndPassword = async (e) => {
        e.preventDefault()
        try {
            await signInWithGoogleEmailAndPassword(email, password)
            resetFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User not found')
                    break;
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break
                default: 
                    console.log(error.code)
                    break;
            }
            resetFields()
        }
    }

    return (
        <div className='sign-in-container'>
            <h1>Sign in</h1>
            <form onSubmit={handleSignInWithEmailAndPassword}>
                <FormInput 
                    label='Email'
                    value={signInValues.email}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    label='Password'
                    value={signInValues.password} 
                    name='password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser} >Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn