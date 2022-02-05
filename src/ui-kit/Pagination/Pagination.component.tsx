import React, { useCallback, useMemo } from 'react';
import {
  StyledPaginationButton,
  StyledPaginationWrapper,
} from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}
export function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  if (totalPages === 1) return null;

  const isOnFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isOnLastPage = useMemo(
    () => currentPage === totalPages,
    [currentPage, totalPages],
  );

  const handleClickPrevious = useCallback(() => {
    if (isOnFirstPage) return null;

    return handlePageChange(currentPage - 1);
  }, [isOnFirstPage, handlePageChange, currentPage]);

  const handleClickNext = useCallback(() => {
    if (isOnLastPage) return null;

    return handlePageChange(currentPage + 1);
  }, [isOnLastPage, currentPage, handlePageChange]);

  return (
    <StyledPaginationWrapper>
      <StyledPaginationButton
        type="button"
        onClick={handleClickPrevious}
        disabled={isOnFirstPage}
      >
        Previous
      </StyledPaginationButton>
      <StyledPaginationButton
        type="button"
        onClick={handleClickNext}
        disabled={isOnLastPage}
      >
        Next
      </StyledPaginationButton>
    </StyledPaginationWrapper>
  );
}
