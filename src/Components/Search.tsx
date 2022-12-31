import styled from 'styled-components';
import { Flex } from '../Containers/Flex';
import SearchIcon from '../Icons/icon-search.svg';

const StyledSearch = styled.input`
   width: 100%;
   padding-bottom: 15px;
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
`;

export const Search = () => {
   return (
      <Flex gap='24px'>
         <img src={SearchIcon} alt='' />
         <StyledSearch type='text' placeholder='Search for movies or TV series' />
      </Flex>
   );
};
