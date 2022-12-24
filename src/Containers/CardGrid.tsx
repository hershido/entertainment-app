import styled from 'styled-components';



export const CardGrid = styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );
    column-gap:40px;
    row-gap:32px;
`