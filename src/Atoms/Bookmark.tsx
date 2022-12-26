import React, { useState } from 'react';
import styled from 'styled-components';
import { IconBookmark } from '../IconComponents';
import EmptyBookmark from '../Icons/icon-bookmark-empty.svg';
import FullBookmark from '../Icons/icon-bookmark-full.svg';
import HoverBookmark from '../Icons/icon-bookmark-hover.svg';

const StyledBookmark = styled.div<{ isHovered: boolean }>`
   grid-area: 1/1/2/2;
   background-color: ${({ theme, isHovered }) =>
      isHovered ? theme.colors.white.full : theme.colors.blue.darkHalfTransparent};
   display: flex;
   justify-content: center;
   align-items: center;
   width: 32px;
   height: 32px;
   border-radius: 50%;
   justify-self: end;
   margin-top: 16px;
   margin-right: 16px;
   cursor: pointer;
`;

export const Bookmark = () => {
   const [isBookmarked, setIsBookMarked] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   return (
      <StyledBookmark
         onClick={() => {
            setIsBookMarked(!isBookmarked);
            setIsHovered(false);
         }}
         isHovered={isHovered}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <IconBookmark
            stroke={isHovered ? '#000000' : '#ffffff'}
            fill={isBookmarked ? '#ffffff' : 'none'}
         />
      </StyledBookmark>
   );
};
