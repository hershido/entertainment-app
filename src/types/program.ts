export interface CardThumbnail {
   regular: {
      small: string;
      large: string;
      medium: string;
   };
   trending?: {
      small: string;
      large: string;
   };
}

export interface Program {
   isTrending: boolean;
   isBookmarked: boolean;
   rating: 'PG' | 'PG-13' | 'R';
   year: number;
   category: 'Movie' | 'TV Series';
   thumbnail: CardThumbnail;
   title: string;
   id: string;
}
