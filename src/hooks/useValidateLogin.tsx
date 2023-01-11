import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export function useValidateLogin() {
   const { signInUser } = useAuth();
   const emailInput = useRef<HTMLInputElement>(null);
   const passwordInput = useRef<HTMLInputElement>(null);

   const navigate = useNavigate();

   const [emailValidation, setEmailValidation] = useState({ isValid: true, errorMessage: '' });
   const [passwordValidation, setPasswordValidation] = useState({
      isValid: true,
      errorMessage: '',
   });

   const handleFormSubmit = async (event: React.SyntheticEvent) => {
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
         try {
            const user = await signInUser(email, password);
            console.log('loggedin:', user);
            navigate('/');
         } catch (error) {
            console.log(error);
         }
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
