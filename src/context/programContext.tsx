import _ from 'lodash';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { HOMEPAGE_STATES, HompageState } from '../consts/hompageStates';
import { getPrograms, getUserBookmarks } from '../firebase/firebaseConfig';
import { Program } from '../types/program';

interface ProgramContextValue {
   trendingPrograms: Program[] | undefined;
   regularPrograms: Program[] | undefined;
   homepageState: HompageState;
   setHompageState: (state: HompageState) => void;
   setSearch: (state: string) => void;
   search: string;
}

const ProgramContext = createContext<ProgramContextValue>({
   trendingPrograms: [],
   regularPrograms: [],
   homepageState: HOMEPAGE_STATES.HOME,
   setHompageState: () => {},
   setSearch: () => '',
   search: '',
});

export const useProgramContext = () => {
   return useContext(ProgramContext);
};

export const ProgramContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [regularPrograms, setRegularPrograms] = useState<Program[]>();
   const [trendingPrograms, setTrendingPrograms] = useState<Program[]>();
   const [homepageState, setHompageState] = useState(HOMEPAGE_STATES.HOME);
   const [search, setSearch] = useState<string>('');

   useEffect(() => {
      getPrograms().then((programs) => {
         switch (homepageState) {
            case HOMEPAGE_STATES.HOME:
               const [trendingPrograms, regularPrograms] = _.partition(
                  programs,
                  (program: Program) => program.isTrending
               );
               setRegularPrograms(regularPrograms);
               setTrendingPrograms(trendingPrograms);
               break;
            case HOMEPAGE_STATES.MOVIES:
               setRegularPrograms(programs.filter((program) => program.category === 'Movie'));
               break;
            case HOMEPAGE_STATES.TV:
               setRegularPrograms(programs.filter((program) => program.category === 'TV Series'));
               break;
            case HOMEPAGE_STATES.BOOKMARKED:
               console.log('Bookmarked');
               getUserBookmarks().then((bookmarkedPrograms) => {
                  const bookmarked = programs.filter((program) =>
                     bookmarkedPrograms.includes(program.id)
                  );
                  setRegularPrograms(bookmarked);
               });
               break;
            case HOMEPAGE_STATES.SEARCH:
               const searchPrograms = programs.filter((program) => program.title.includes(search));
               setRegularPrograms(searchPrograms);
               break;
            default:
               break;
         }
      });
   }, [homepageState, search]);

   const value = {
      regularPrograms,
      trendingPrograms,
      homepageState,
      setHompageState,
      setSearch,
      search,
   };

   return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
};
