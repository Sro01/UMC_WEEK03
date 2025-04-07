import { Movie } from "../types/movie";
import { Credit } from "../types/credit";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../component/LoadingSpinner";
import CreditCard from "../component/CreditCard";

const MovieDetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<Credit | null>(null);

  // 1. 로딩 상태
  const [isPending, setIsPending] = useState(false);
  // 2. 에러 상태
  const [isError, setIsError] = useState(false);

  useEffect((): void => {
    const fetchMovieDetail = async (): Promise<void> => {
      setIsPending(true);

      try {
        // 1. 영화 상세 정보
        const { data: detail } = await axios.get(
          // response 객체에서 data를 꺼내서 movieDetail라는 변수명으로 저장
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
          }
        );

        // 2. 출연진 정보
        const { data: credits } = await axios.get(
          // response 객체에서 data를 꺼내서 credits라는 변수명으로 저장
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
          }
        );

        setMovieDetail(detail);
        setCredits(credits);

        console.log("movie:", detail);
        console.log("credits:", credits);
      } catch {
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    };

    fetchMovieDetail();
  }, []);

  if (isError) {
    return (
      <div>
        <span className="text-red-500 text-2xl">에러가 발생했습니다.</span>
      </div>
    );
  }

  return (
    <>
      {isPending && (
        <div className="flex items-center justify-center h-dvh">
          <LoadingSpinner />
        </div>
      )}
      {!isPending && (
        <>
          <div
            className="flex items-center justify-center absolute top-0 left-0 w-full h-96 mb-5 inset-0 bg-gradient-to-t from-black/50 
        to-transparent backdrop-blur-md"
          >
            <img
              src={`http://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
              alt={`${movieDetail?.title} 영화의 이미지`}
              className="w-full h-96 object-cover"
            />
          </div>
          <div id="movie-detail" className="p-10 relative ">
            <h1 className="p-1">{movieDetail?.title}</h1>
            <h2 className="p-1">평균 {movieDetail?.vote_average.toFixed(1)}</h2>
            <h2 className="p-1">{movieDetail?.release_date?.split("-")[0]}</h2>
            <h2 className="p-1">{movieDetail?.runtime}분</h2>
            <p className="p-1 line-clamp-5">{movieDetail?.overview}</p>
          </div>
          <div
            id="credit-detail"
            className="p-10 grid gap-1 grid-cols-10 sm:grid-cols-10 mt-5"
          >
            {credits?.cast.map((cast) => (
              <CreditCard key={cast.id} cast={cast} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailPage;
