// import React from 'react';
import { Cast } from "../types/credit";

interface CreditCardProps {
  cast: Cast;
}

const CreditCard = ({ cast }: CreditCardProps) => {
  return (
    <div
      key={cast.id}
      className="rounded-full
 shadow-lg overflow-hidden cursor-pointer w-18 h-18 transistion-tranform duration-500 hover:scale-105 "
    >
      <img
        src={`http://image.tmdb.org/t/p/w200${cast.profile_path}`}
        alt={`${cast.name} 배우의 이미지`}
        className=""
      />
      <div className="inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-center text-white p-4">
        <h2 className="text-lg font-bold leading-snug">{cast.name}</h2>
        <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-5">
          {cast.character}
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
