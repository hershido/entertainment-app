import { Button } from '../Atoms/Button';
import styled from 'styled-components';
import PlayIcon from '../Icons/play-button.svg';
import { Heading } from '../Atoms/Heading';


const StyledPlayButton = styled(Button)`
   width: 117px;
   height: 48px;
   background-color:  ${({theme}) => theme.colors.white.quarter};
   border-radius: 28px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 24px 0 9px;
   cursor: pointer;

   &:hover {
      background-color:  ${({theme}) => theme.colors.white.quarter};
      color: ${(props) => props.theme.colors.blue.semiDark};
   }
`;

export const PlayButton: React.FC<{ className?: string }> = ({ className }) => (
   <StyledPlayButton className={className}>
      <img src={PlayIcon} alt='play' />
      <Heading size='XS' headingType='span'>
         Play
      </Heading>
   </StyledPlayButton>
);
