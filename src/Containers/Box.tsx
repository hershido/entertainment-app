import React from 'react';
import styled from 'styled-components';

interface BoxProps {
   width?: string;
   height?: string;
   padding?: string;
   children?:React.ReactNode;
   // Add other props here as needed
}

const StyledBox = styled.div<BoxProps>`
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
   border-radius: 20px;
   height: ${props => props.height || 'auto'};
   width: ${props => props.width || 'auto'};
   padding: ${props => props.padding || '32px'};
`;


const Box = (props: BoxProps) => {
   return <StyledBox {...props}>{props.children}</StyledBox>;
};

export default Box;
