import styled from 'styled-components';

export const StyledPaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cta};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  &:disabled {
    background-color: transparent;
    color: black;
    pointer-events: none;
  }

  & + * {
    margin-left: 1rem;
  }
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
