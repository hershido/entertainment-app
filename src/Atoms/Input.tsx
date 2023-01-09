import React, { useState, forwardRef, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   position: relative;
   width: 100%;
`;

const StyledInput = styled.input<{ isValid: boolean }>`
   position: relative;
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
   text-align: right;
   top: 0;
   right: 0;
   color: ${({ theme }) => theme.colors.red.main};
   font-size: 13px;
   width:50%;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   validation: {
      isValid: boolean;
      errorMessage: string;
   };
   setValidation: Dispatch<SetStateAction<{ isValid: boolean; errorMessage: string }>>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
   ({ placeholder, type, validation, setValidation }, ref) => {
      return (
         <StyledWrapper>
            <StyledInput
               type={type}
               ref={ref}
               onFocus={() => setValidation({ isValid: true, errorMessage: '' })}
               placeholder={placeholder}
               isValid={validation.isValid}></StyledInput>
            {!validation.isValid && (
               <StyledValidationMessage>{validation.errorMessage}</StyledValidationMessage>
            )}
         </StyledWrapper>
      );
   }
);
