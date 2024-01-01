import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';
import { Link } from 'react-router-dom';

/** Button */
export default function Button() {
  return <GoToButton to="/search">바로가기</GoToButton>;
}

const GoToButton = styled(Link)`
  ${commonFlex}
  width: 30rem;
  height: 8rem;

  font-size: 3rem;
  color: ${({ theme }) => theme.colors.bgColor};

  background-color: ${({ theme }) => theme.colors.main01};
`;
