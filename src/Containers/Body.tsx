import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
   background-color: ${({ theme }) => theme.colors.blue.dark};
   min-height: 100vh;
`;

interface BodyProps {
   children?: ReactNode | ReactNode[];
}

const Body: React.FC<BodyProps> = ({ children }) => {
   return <StyledBody>{children}</StyledBody>;
};

export default Body;
