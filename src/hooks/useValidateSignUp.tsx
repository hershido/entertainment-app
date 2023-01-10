import { useRef, useState } from "react";
import { createUser } from "../firebase/firebaseConfig";

export function useValidateSignUp() {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const repeatPasswordInput = useRef<HTMLInputElement>(null);
 
    const [emailValidation, setEmailValidation] = useState({ isValid: true, errorMessage: '' });
    const [passwordValidation, setPasswordValidation] = useState({
       isValid: true,
       errorMessage: '',
    });
    const [passwordConfirmValidation, setPasswordConfirmValidation] = useState({
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
 
       // Validate repeat password
       const repeatPassword = repeatPasswordInput.current?.value;
       if (repeatPassword !== password) {
          setPasswordConfirmValidation({ isValid: false, errorMessage: 'Passwords do not match' });
          isFormValid = false;
       } else {
          setPasswordConfirmValidation({ isValid: true, errorMessage: '' });
       }
 
       if (email && password && isFormValid) {
          createUser(email, password);
       }
    };
 
    return {
       emailValidation,
       passwordValidation,
       passwordConfirmValidation,
       setEmailValidation,
       setPasswordValidation,
       setPasswordConfirmValidation,
       handleFormSubmit,
       emailInput,
       passwordInput,
       repeatPasswordInput,
    };
 }