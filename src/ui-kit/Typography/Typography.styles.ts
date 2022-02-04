import styled from 'styled-components';

export const H1 = styled.h1`
  ${(props) => `color: ${props.theme.colors.primary};`}
  font-size: 2rem;
  font-weight: bold;
`;

export const H2 = styled.h2`
  ${(props) => `color: ${props.theme.colors.primary};`}
  font-size: 2rem;
`;

export const P = styled.p`
  ${(props) => `color: ${props.theme.colors.primary};`}
  font-size: 1rem;
  line-height: 1.3;
`;
