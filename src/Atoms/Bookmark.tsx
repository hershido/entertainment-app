import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBookmarked, setBookmark } from '../firebase/firebaseConfig';
import { IconBookmark } from '../iconComponents';

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

export const Bookmark: React.FC<{ programId: string }> = ({ programId }) => {
   const [isBookmarked, setIsBookmarked] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const getIsBookmarked = useCallback(() => {
      getBookmarked(programId).then((result) => {
         console.log(result);
         setIsBookmarked(result);
      });
   }, [programId]);

   useEffect(() => {
      getIsBookmarked();
   }, [getIsBookmarked]);

   async function handleBookmarkClick() {
      setIsBookmarked(!isBookmarked);
      await setBookmark(programId);
   }

   return (
      <StyledBookmark
         onClick={handleBookmarkClick}
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
