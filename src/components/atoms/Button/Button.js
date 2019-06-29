import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ pageType, theme }) => {
    switch (pageType) {
      case 'notes':
        return theme.primary;
      case 'twitters':
        return theme.secondary;
      case 'articles':
        return theme.tertiary;
      default:
        return theme.grey200;
    }
  }};
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export default Button;
