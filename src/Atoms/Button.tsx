import styled from 'styled-components';

interface ButtonProps {
   width?: string;
   height?: string;
   backgroundColor?: string;
   borderRadius?: string;
   color?: string;
   fontSize?: string;
   fontWeight?: string;
   lineHeight?: string;
   border?: string;
   boxShadow?: string;
}

export const Button = styled.button<ButtonProps>`
   background-color: ${(props) => props.backgroundColor || props.theme.colors.red.main};
   color: ${(props) => props.color || props.theme.colors.white.full};
   font-size: ${(props) => props.fontSize || props.theme.body.M.fontSize};
   font-weight: ${(props) => props.fontWeight || props.theme.body.M.fontWeight};
   line-height: ${(props) => props.lineHeight || props.theme.body.M.lineHeight};
   width: ${(props) => props.width || 'auto'};
   height: ${(props) => props.height || '48px'};
   border-radius: ${(props) => props.borderRadius || '6px'};
   border: ${(props) => props.border || 'none'};
   box-shadow: ${(props) => props.boxShadow || 'none'};

   &:hover {
      background-color: ${(props) => props.theme.colors.white.full};
      color: ${(props) => props.theme.colors.blue.semiDark};
   }
`;
