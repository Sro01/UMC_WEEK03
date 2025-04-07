// import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div
      className="size-12 animate-spin rounded-full border-6 border-t-transparent border-[#4f46e5]"
      role="status"
    >
      {/* 스크린 리더를 위한 텍스트 */}
      <span className="sr-only">로딩 중...</span>{" "}
    </div>
  );
};

export default LoadingSpinner;
