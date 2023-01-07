import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   position: relative;
   width: 100%;
`;

const StyledInput = styled.input<{ isValid: boolean }>`
   width: 100%;
   background-color: transparent;
   border: none;
   outline: none;
   border-bottom: 1px solid;
   border-color: ${({ theme, isValid }) =>
      isValid ? theme.colors.blue.greyish : theme.colors.red.main};
   color: ${({ theme }) => theme.colors.white.full};
   padding: 0 0 18px 16px;
   &::placeholder {
      color: ${({ theme }) => theme.colors.white.half};
   }

   &:focus {
      border-color: ${({ theme }) => theme.colors.white.full};
   }

   caret-color: ${({ theme }) => theme.colors.red.main};
`;

const StyledValidationMessage = styled.span`
   position: absolute;
   top: 0;
   color: ${({ theme }) => theme.colors.red.main};
`;

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
   ({ placeholder, type }, ref) => {
      const [isValid, setIsValid] = useState(true);

      function Validate() {
         setIsValid(true);
      }

      function clearValidation() {
         setIsValid(true);
      }

      return (
         <StyledWrapper>
            <StyledInput
               type={type}
               ref={ref}
               onBlur={Validate}
               onFocus={clearValidation}
               placeholder={placeholder}
               isValid={isValid}></StyledInput>
            {!isValid && <StyledValidationMessage></StyledValidationMessage>}
         </StyledWrapper>
      );
   }
);
