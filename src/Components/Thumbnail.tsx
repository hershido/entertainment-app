import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getThumbnailURL } from '../firebase/firebaseConfig';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { CardThumbnail, Program } from '../types/program';
import { Loader } from './Loader';

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

   .image-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
   }
`;

interface ThumbnailProps extends Pick<Program, 'thumbnail'> {
   className: string;
   isRenderedInTrending?: boolean;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
   thumbnail,
   className,
   isRenderedInTrending,
}) => {
   const breakpoint = useBreakpoint();
   const [generatedThumbnail, setGeneratedThumbnail] = useState<string>();

   const determineThumbnail = useCallback(
      (thumbnail: CardThumbnail) => {
         if (isRenderedInTrending) {
            return breakpoint === 'mobile' ? thumbnail.trending?.small : thumbnail.trending?.large;
         } else {
            if (breakpoint === 'mobile') return thumbnail.regular.small;
            if (breakpoint === 'tablet') return thumbnail.regular.medium;
            if (breakpoint === 'desktop') return thumbnail.regular.large;
         }
      },
      [breakpoint, isRenderedInTrending]
   );

   useEffect(() => {
      const thumbnailToUse = determineThumbnail(thumbnail);
      getThumbnailURL(thumbnailToUse).then((newThumbnailURL) => {
         setGeneratedThumbnail(newThumbnailURL);
      });
   }, [thumbnail, breakpoint, determineThumbnail]);

   return (
      <StyledThumbnail className={className}>
         {!generatedThumbnail ? (
            <div className='image-placeholder'>
               <Loader />
            </div>
         ) : (
            <img className='thumbnail-image' src={generatedThumbnail} alt=''></img>
         )}
      </StyledThumbnail>
   );
};
