// import React from 'react';
interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <>
      <div className="flex items-center justify-center gap-6 mt-5">
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md 
          hover:bg-blue-600 transition-all duraition-300 disabled:bg-gray-300 cursor-pointer
          disabled:cursor-not-allowed"
          disabled={page === 1}
          onClick={(): void => setPage((prev) => prev - 1)}
        >{`<`}</button>
        <span>{page}번 페이지</span>
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md 
          hover:bg-blue-600 transition-all duraition-300 disabled:bg-gray-300 cursor-pointer
          disabled:cursor-not-allowed"
          onClick={(): void => setPage((prev) => prev + 1)}
        >{`>`}</button>
      </div>
    </>
  );
};

export default Pagination;
