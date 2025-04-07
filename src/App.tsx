import "./App.css";

// 1. import를 해줍니다.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesPage from "./pages/MoviePage";
import RootLayout from "./layout/root-layout";
import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // 없는 경로에 들어온 처리를 해줍니다.
    errorElement: <NotFoundPage />,
    // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 children 활용
    children: [
      {
        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미
        index: true,
        element: <HomePage />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 movies랑 동일하게 동작
        path: "movies/:category",
        element: <MoviesPage />,
      },
      {
        // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 movies랑 동일하게 동작
        path: "movie/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

function App() {
  console.log(import.meta.env.VITE_TMDB_KEY);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
