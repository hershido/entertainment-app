import _ from 'lodash';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getPrograms } from '../firebase/firebaseConfig';
import { Program } from '../types/program';

const ProgramContext = createContext<{
   trendingPrograms: Program[] | undefined;
   regularPrograms: Program[] | undefined;
}>({
   trendingPrograms: [],
   regularPrograms: [],
});

export const useProgramContext = () => {
   return useContext(ProgramContext);
};

export const ProgramContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [regularPrograms, setRegularPrograms] = useState<Program[]>();
   const [trendingPrograms, setTrendingPrograms] = useState<Program[]>();

   useEffect(() => {
      getPrograms().then((programs) => {
         const [trendingPrograms, regularPrograms] = _.partition(
            programs,
            (program: Program) => program.isTrending
         );
         setRegularPrograms(regularPrograms);
         setTrendingPrograms(trendingPrograms);
      });
   }, []);

   const value = {
      regularPrograms,
      trendingPrograms,
   };

   return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
};
