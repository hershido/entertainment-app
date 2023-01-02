import styled from 'styled-components';
import { Flex } from '../containers/Flex';
import SearchIcon from '../Icons/icon-search.svg';


const StyledSearch = styled.input`
   width: calc(100% - 92px);
   height: 50px;
   background-color: transparent;
   border: none;
   outline: none;
   font-size: ${({ theme }) => theme.headings.M.fontSize};
   font-weight: ${({ theme }) => theme.headings.M.fontWeight};
   border-color: ${({ theme }) => theme.colors.blue.greyish};
   color: ${({ theme }) => theme.colors.white.full};
   &::placeholder {
      color: ${({ theme }) => theme.colors.white.half};
   }
   &:focus {
      border-bottom: 1px solid;
   }

   @media screen and (max-width: 750px) {
      font-size: 16px;
   }
`;

const StyledSearchIcon = styled.img`
   @media screen and (min-width: 1025px) {
      width: 24px;
      margin-top: 3px;
      margin-right: 24px;
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      width: 24px;
      margin-right: 24px;
   }
   @media screen and (max-width: 750px) {
      width: 18px;
      margin-right: 16px;
   }
`;

export const Search = () => {
   return (
      <Flex alignItems='center'>
         <StyledSearchIcon src={SearchIcon} alt='' />
         {/* <IconSearch/> */}
         <StyledSearch type='text' placeholder='Search for movies or TV series' />
      </Flex>
   );
};
