import styled from 'styled-components';

export const H1 = styled.h1`
  ${(props) => `color: ${props.theme.colors.primary};`}
  font-size: 2rem;
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 1.3;
`;
