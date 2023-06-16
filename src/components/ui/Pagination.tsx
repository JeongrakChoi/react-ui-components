import React from 'react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstClick = () => {
    handlePageClick(1);
  };

  const handlePrevClick = () => {
    handlePageClick(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageClick(currentPage + 1);
  };

  const handleLastClick = () => {
    handlePageClick(totalPages);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 9; // 최대 표시되는 페이징 버튼의 개수
    const middlePage = Math.ceil(maxVisiblePages / 2); // 중간 페이징 버튼의 인덱스
    let startPage = Math.max(currentPage - middlePage + 1, 1); // 시작 페이지
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages); // 끝 페이지

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li>
          <button key={i} className={i === currentPage ? 'active' : ''} onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button className="paging first" onClick={handleFirstClick} disabled={currentPage === 1}>
        First
      </button>
      <button className="paging prev" onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      <ul>{renderPageNumbers()}</ul>
      <button className="paging next" onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
      <button className="paging last" onClick={handleLastClick} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
