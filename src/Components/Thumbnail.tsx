import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../Atoms/Bookmark';
import { PlayButton } from './PlayButton';

const StyledThumbnail = styled.div`
   display: grid;
   border-radius: 8px;
   overflow: hidden;
   /* height:174px; */
   .bookmark-image {
      width: 100%;
      grid-area: 1/1/2/2;
   }

   .play-button {
      grid-area: 1/1/2/2;
      justify-self: center;
      align-self: center;
      border: 1px solid red;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors.blue.darkHalfTransparent};
   }
`;

export const Thumbnail: React.FC<{ thumbnail?: string }> = ({ thumbnail = 'large.jpg' }) => {
   const [isHovered, setIsHovered] = useState(false);
   return (
      <StyledThumbnail
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <img className='bookmark-image' src={thumbnail}></img>
         {isHovered && (
            <div className='play-button'>
               <PlayButton />
            </div>
         )}
         <Bookmark />
      </StyledThumbnail>
   );
};
