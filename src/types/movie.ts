// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODFhODJmOGU3OTEzOWE4Njc3OWNkZWEzNWIyYzRiMSIsIm5iZiI6MTc0Mzk2MjczOC40OTQwMDAyLCJzdWIiOiI2N2YyYzI3MmVkZGVjMjhiMDNhZDcxMDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aQKVwFOE5ZL6N__Xg_-8AGvWaFdi6Uc1DWLVRsy7QXw

export type Movie = {
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
};

export type MovieResponse = {
  page: number;
  results: Movie[]; // 실제로 들어오는거는 여러개의 영화 데이터니 Movie의 배열로 표현
  total_pages: number;
  total_results: number;
};
