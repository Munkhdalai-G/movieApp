// ─── Shared Primitives ───────────────────────────────────────────────────────

export interface Dates {
  maximum: string;
  minimum: string;
}

// ─── Genre ───────────────────────────────────────────────────────────────────

export interface Genre {
  id: number;
  name: string;
}

export interface GenreList {
  genres: Genre[];
}

// ─── Movie ───────────────────────────────────────────────────────────────────

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieList {
  dates?: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieTrailer {
  id: number;
  results: TrailerResult[];
}

export interface TrailerResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

// ─── Production ──────────────────────────────────────────────────────────────

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path?: string;
  rating?: number;
}

export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
}

export interface ReviewList {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

// ─── UI / Props ──────────────────────────────────────────────────────────────

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pages: (number | "...")[];
}
