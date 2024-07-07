export type MovieResponse = {
    title: string;
    poster_path: string;
    popularity: number;
    adult: boolean,
    genre_ids: number[],
    original_title: string,
    overview: string,
  };