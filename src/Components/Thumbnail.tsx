import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../Atoms/Bookmark';
import { PlayButton } from './PlayButton';

const StyledThumbnail = styled.div`
   display: grid;
   border-radius: 8px;
   overflow: hidden;
   height: 100%;
   .bookmark-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      grid-area: 1/1/2/2;
   }


`;

export const Thumbnail: React.FC<{ thumbnail?: string; className: string }> = ({
   thumbnail = 'large.jpg',
   className,
}) => {
   return (
      <StyledThumbnail className={className}>
         <img className='bookmark-image' src={thumbnail}></img>
      </StyledThumbnail>
   );
};
