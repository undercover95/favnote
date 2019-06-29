import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};

  ${({ light }) =>
    light &&
    css`
      font-weight: ${({ theme }) => theme.light};
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Heading;
