// import React from 'react';
import { useParams } from "react-router-dom";
// import { Movie, MovieResponse } from "../types/movie";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import MovieCard from "../component/MovieCard";
// import LoadingSpinner from "../component/LoadingSpinner";
// import Pagination from "../component/Pagination";

const MovieDetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  return <div>MovieDetailPage {movieId}</div>;
  //   const [movies, setMovies] = useState<Movie[]>([]); // useState에 Movie[] 타입 지정
  //   const [movieDetail, setMovieDetail] = useState<Movie[]>([]); // useState에 Movie[] 타입 지정

  //   // 1. 로딩 상태
  //   const [isPending, setIsPending] = useState(false);
  //   // 2. 에러 상태
  //   const [isError, setIsError] = useState(false);
  //   // 3. 페이지
  //   const [page, setPage] = useState(1);
  //   // 4. 카테고리
  //   const { movieId } = useParams();

  //   useEffect((): void => {
  //     const fetchMovies = async (): Promise<void> => {
  //       // fetchMovies가 시작 시점에는 로딩 상태가 data를 호출하는 중이기 때문에 setIsPending(true)
  //       setIsPending(true);

  //       try {
  //         const { data } = await axios.get<MovieResponse>(
  //           `https://api.themoviedb.org/3/movie/${movieId}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`, // 환경변수를 사용할 때 접두사 VITE_를 붙여야 함
  //             },
  //           }
  //         );

  //         setMovies(data.results);
  //         console.log(data.results);
  //       } catch {
  //         setIsError(true);
  //       } finally {
  //         // finally는 성공하든 실패하든 무조건 실행
  //         setIsPending(false); // 데이터 호출이 끝났으니 로딩 상태 false
  //       }
  //     };

  //     fetchMovies();
  //   }, []); // page와 category가 바뀔 때마다 useEffect가 실행됨

  //   if (isError) {
  //     return (
  //       <div>
  //         <span className="text-red-500 text-2xl">에러가 발생했습니다.</span>
  //       </div>
  //     );
  //   }

  //   return (
  //     <>
  //       <Pagination page={page} setPage={setPage} />
  //       {isPending && (
  //         <div className="flex items-center justify-center h-dvh">
  //           <LoadingSpinner />
  //         </div>
  //       )}
  //       {!isPending && (
  //         <div className="p-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
  //           {movies.map((movie) => (
  //             <MovieCard key={movie.id} movie={movie} />
  //           ))}
  //         </div>
  //       )}
  //     </>
  //   );
};

export default MovieDetailPage;
