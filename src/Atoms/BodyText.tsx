import styled from 'styled-components';

interface BodyTextProps {
   size: 'M' | 'S';
   asButton?: boolean;  
}

const BodyText = styled.span<BodyTextProps>`
   font-size: ${(props) => props.theme.body[props.size].fontSize};
   font-weight: ${(props) => props.theme.body[props.size].fontWeight};
   line-height: ${(props) => props.theme.body[props.size].lineHeight};
   font-family: ${(props) => props.theme.body[props.size].fontFamily};
   color: ${({asButton,theme}) => asButton && theme.colors.red.main}
`;

export default BodyText;
