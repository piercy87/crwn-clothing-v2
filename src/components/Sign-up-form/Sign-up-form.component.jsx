import { useState } from "react"
import { createUserDocumentFromAuth, signUpWithGoogleEmailAndPassword } from "../../utils/Firebase/firebase.utils"
import Button from "../Lib/Button/Button.component"
import FormInput from "../Lib/form-input/Form-input.component"
import './sign-up-form.styles.scss'

const defaultFormValues = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const resetFields = () => {
        setDefaultValues(defaultFormValues)
    }

    const [defaultValues, setDefaultValues] = useState(defaultFormValues)
    const { email, displayName, password, confirmPassword } = defaultValues
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDefaultValues({ ...defaultValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            try {
                const { user } = await signUpWithGoogleEmailAndPassword(email, password)
                await createUserDocumentFromAuth(user, { displayName })
                resetFields()
            } catch (error) {
                error.code === 'auth/email-already-in-use' && alert('Email already in use')
                console.log('error', error.message)
            }
           
        } else {
            alert('Passwords don\'t match')
            return {
                success: false,
                error: 'password does not match'
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    value={email} 
                    name='email' 
                    type='email' 
                    onChange={handleChange} 
                    required 
                />

                <FormInput 
                    label="Name"
                    value={displayName} 
                    type='text' 
                    name="displayName" 
                    onChange={handleChange} 
                    required 
                />

                <FormInput 
                    label="Password"
                    value={password} 
                    name="password" 
                    type='password' 
                    onChange={handleChange} 
                    required
                />

                <FormInput 
                    label="Confirm Password"
                    value={confirmPassword} 
                    name='confirmPassword' 
                    type='password' 
                    onChange={handleChange} 
                    required
                />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm