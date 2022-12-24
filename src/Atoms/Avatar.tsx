import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid ${({ theme }) => theme.colors.white.full};
`;

const Avatar: React.FC<{ src: string , className:string}> = ({ src, className }) => {
   return <StyledAvatar className={className} src={src} />;
};

export default Avatar;
