import React from 'react';
import styled from 'styled-components';

const StyledNavIcon = styled.img`
   width:20px;
   height:20px;
`;

const NavIcon: React.FC<{ src: string }> = ({ src }) => {
   return <StyledNavIcon src={src}/>;
};

export default NavIcon;
