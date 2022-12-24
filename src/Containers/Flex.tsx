import React from 'react';

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

export const Flex: React.FC<FlexProps> = ({
   children,
   direction = 'row',
   justifyContent = 'flex-start',
   alignItems = 'stretch',
   style = {},
   gap,
   width,
   className
}) => {
   return (
      <div
         className={className}
         style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap,
            width,
            ...style,
         }}>
         {children}
      </div>
   );
};
