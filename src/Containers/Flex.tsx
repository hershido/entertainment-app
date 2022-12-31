import React from 'react';
import styled from 'styled-components';

type FlexProps = {
   children: React.ReactNode;
   direction?: 'row' | 'column';
   justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
   alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
   style?: React.CSSProperties;
   gap?: string;
   width?: string;
   className?: string;
};

export const StyledFlex = styled.div<FlexProps>`
   display: flex;
   flex-direction: ${(props) => props.direction || 'row'};
   justify-content: ${(props) => props.justifyContent || 'flex-start'};
   align-items: ${(props) => props.alignItems || 'flex-start'};
   gap: ${(props) => props.gap};
   width: ${(props) => props.width};
`;

export const Flex: React.FC<FlexProps> = (props) => <StyledFlex {...props}>{props.children}</StyledFlex>;


