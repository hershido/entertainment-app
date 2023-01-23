export type HompageState = 'home' | 'movies' | 'TV-series' | 'bookmarked' | 'search';

export interface HompageStates {
   HOME: HompageState;
   MOVIES: HompageState;
   TV: HompageState;
   BOOKMARKED: HompageState;
   SEARCH: HompageState;
}

export const HOMEPAGE_STATES: HompageStates = {
   HOME: 'home',
   MOVIES: 'movies',
   TV: 'TV-series',
   BOOKMARKED: 'bookmarked',
   SEARCH: 'search',
};
