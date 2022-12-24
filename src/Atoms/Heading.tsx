
import { ReactNode } from 'react';
import styled from 'styled-components';

type StyledHeadingProps = {
   size: 'L' | 'M' | 'S' | 'XS';
   color?: string;
};

type HeadingProps = {
   size?: 'L' | 'M' | 'S' | 'XS';
   headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'| 'p' | 'span';
   color?:string;
   children?:ReactNode;
};

const StyledHeading = styled.h1<StyledHeadingProps>`
   font-size: ${({ theme, size }) => theme.headings[size].fontSize || theme.headings.L.fontSize};
   font-weight: ${({ theme, size }) => theme.headings[size].fontWeight};
   line-height: ${({ theme, size }) => theme.headings[size].lineHeight};
   font-family: ${({ theme, size }) => theme.headings[size].fontFamily};
`;

export const Heading: React.FC<HeadingProps> = ({ size = 'L' ,headingType, children}) => (
   <StyledHeading as={headingType} size={size}>{children}</StyledHeading>
);
