import _ from 'lodash';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { HOMEPAGE_STATES, HompageState } from '../consts/hompageStates';
import { getPrograms } from '../firebase/firebaseConfig';
import { Program } from '../types/program';

interface ProgramContextValue {
   trendingPrograms: Program[] | undefined;
   regularPrograms: Program[] | undefined;
   hompageState: HompageState;
   setHompageState: (state: HompageState) => void;
}

const ProgramContext = createContext<ProgramContextValue>({
   trendingPrograms: [],
   regularPrograms: [],
   hompageState: HOMEPAGE_STATES.HOME,
   setHompageState: () => {},
});

export const useProgramContext = () => {
   return useContext(ProgramContext);
};

export const ProgramContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [regularPrograms, setRegularPrograms] = useState<Program[]>();
   const [trendingPrograms, setTrendingPrograms] = useState<Program[]>();
   const [hompageState, setHompageState] = useState(HOMEPAGE_STATES.HOME);

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
      hompageState,
      setHompageState,
   };

   return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
};
