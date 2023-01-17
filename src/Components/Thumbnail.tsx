import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getThumbnailURL } from '../firebase/firebaseConfig';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { CardThumbnail, Program } from '../types/program';

const StyledThumbnail = styled.div`
   display: grid;
   border-radius: 8px;
   overflow: hidden;
   height: 100%;
   .thumbnail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      grid-area: 1/1/2/2;
   }
`;

interface ThumbnailProps extends Pick<Program, 'thumbnail' | 'isTrending'> {
   className: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail, className, isTrending }) => {
   const breakpoint = useBreakpoint();
   const [generatedThumbnail, setGeneratedThumbnail] = useState('');

   const determineThumbnail = useCallback(
      (thumbnail: CardThumbnail) => {
         if (isTrending) {
            return breakpoint === 'mobile' ? thumbnail.trending?.small : thumbnail.trending?.large;
         } else {
            if (breakpoint === 'mobile') return thumbnail.regular.small;
            if (breakpoint === 'tablet') return thumbnail.regular.medium;
            if (breakpoint === 'desktop') return thumbnail.regular.large;
         }
      },
      [breakpoint, isTrending]
   );

   useEffect(() => {
      const thumbnailToUse = determineThumbnail(thumbnail);
      getThumbnailURL(thumbnailToUse).then((newThumbnailURL) => {
         setGeneratedThumbnail(newThumbnailURL);
      });
   }, [thumbnail, breakpoint, determineThumbnail]);

   return (
      <StyledThumbnail className={className}>
         <img className='thumbnail-image' src={generatedThumbnail} alt=''></img>
      </StyledThumbnail>
   );
};
