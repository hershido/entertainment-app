import { useRef, useState } from "react";
import { signInUser } from "../firebase/firebaseConfig";

export function useValidateLogin() {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    
 
    const [emailValidation, setEmailValidation] = useState({ isValid: true, errorMessage: '' });
    const [passwordValidation, setPasswordValidation] = useState({
       isValid: true,
       errorMessage: '',
    });

 
    const handleFormSubmit = (event: React.SyntheticEvent) => {
       event.preventDefault();
 
       let isFormValid = true;
 
       // Validate email
       const email = emailInput.current?.value;
       if (!email || !email.includes('@')) {
          setEmailValidation({ isValid: false, errorMessage: 'Please enter a valid email address' });
          isFormValid = false;
       } else {
          setEmailValidation({ isValid: true, errorMessage: '' });
       }
 
       // Validate password
       const password = passwordInput.current?.value;
       if (!password || password.length < 8) {
          setPasswordValidation({
             isValid: false,
             errorMessage: 'Please enter a password with at least 8 characters',
          });
          isFormValid = false;
       } else {
          setPasswordValidation({ isValid: true, errorMessage: '' });
       }
 
       if (email && password && isFormValid) {
          signInUser(email, password).then((user)=>{
            console.log(user)
          });
       }
    };
 
    return {
       emailValidation,
       passwordValidation,
       setEmailValidation,
       setPasswordValidation,
       handleFormSubmit,
       emailInput,
       passwordInput,
    };
 }