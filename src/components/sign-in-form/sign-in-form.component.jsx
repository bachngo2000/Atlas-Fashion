import { async } from "@firebase/util";
import { useState, useContext } from "react";
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss';
import { signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import GoogleButton from 'react-google-button'
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const[ formFields, setFormFields ] = useState(defaultFormFields);

    const { email, password } = formFields;

    const {setCurrentUser} = useContext(UserContext);

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch(error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert ('The password you entered was incorrect. Please double-check and try again!');
                    break;
                case "auth/user-not-found":
                    alert ('No user is associated with this email! Need an account? Sign Up');
                    break;
                default:
                    console.log(error);
            }
            // if (error.code === "auth/wrong-password") {
            //     alert ('The password you entered was incorrect. Please double-check and try again!');
            // }
            // console.log(error);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });

    };

    return (
        <div className="sign-up-container">
            <h2> Already have an account? </h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>

                <div className='buttons-container'>
                    <Button type="submit"> Sign In </Button>
                    <GoogleButton onClick={signInWithGoogle}/>
                </div>

            </form>

        </div>
    );
};

export default SignInForm;