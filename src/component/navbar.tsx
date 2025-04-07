// import React from 'react';
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "홈" },
  { to: "/movies/popular", label: "인기" },
  { to: "/movies/top_rated", label: "탑" },
  { to: "/movies/upcoming", label: "개봉 예정" },
  { to: "/movies/now_playing", label: "상영 중" },
];

const Navbar = () => {
  return (
    <nav className="flex gap-5 p-4 flex-wrap items-center justify-center bg-white shadow-md">
      {LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-lg"
              : "text-gray-700 hover:text-blue-500 transition-all duration-300"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
