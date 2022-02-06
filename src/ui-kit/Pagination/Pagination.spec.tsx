import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ThemeProvider } from 'styled-components';
import { Pagination } from './Pagination.component';
import { theme } from '../Theme/Theme.consts';

const usePage = () => {
  const [page, setPage] = useState(1);

  return {
    page,
    setPage,
  };
};

describe('Pagination', () => {
  it('is not visible if there is only 1 page', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} handlePageChange={() => {}} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('previous button is disabled on first page', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          currentPage={1}
          totalPages={10}
          handlePageChange={() => {}}
        />
      </ThemeProvider>,
    );

    const previousButton = getByText('Previous');

    expect(previousButton).toHaveAttribute('disabled');
  });

  it('next button is disabled on last page', () => {
    const { getByText } = render(
      // in production app create RenderTest wrapper that provides theme, translations, etc.
      <ThemeProvider theme={theme}>
        <Pagination
          currentPage={10}
          totalPages={10}
          handlePageChange={() => {}}
        />
      </ThemeProvider>,
    );

    const nextButton = getByText('Next');

    expect(nextButton).toHaveAttribute('disabled');
  });

  it('changes page', () => {
    const { result } = renderHook(() => usePage());
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Pagination
          currentPage={result.current.page}
          totalPages={10}
          handlePageChange={result.current.setPage}
        />
      </ThemeProvider>,
    );

    const nextButton = getByText('Next');

    fireEvent(
      nextButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(result.current.page).toEqual(2);
  });
});
