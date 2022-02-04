import styled from "styled-components";
import { H2 } from "../Typography/Typography.styles";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTh = styled.th`
  border: ${({ theme }) => theme.border};
  padding: 0.5rem;
`;

export const StyledTd = styled.td`
  border: ${({ theme }) => theme.border};
  padding: 0.5rem;
`;

export const StyledTitle = styled(H2)`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;
