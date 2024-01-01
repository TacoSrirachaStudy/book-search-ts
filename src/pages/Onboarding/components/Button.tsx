import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

/** Button */
export default function Button() {
  return <GoToButton>바로가기</GoToButton>;
}

const GoToButton = styled.button`
  ${commonFlex}
  width: 30rem;
  height: 8rem;

  font-size: 3rem;
  color: ${({ theme }) => theme.colors.bgColor};

  background-color: ${({ theme }) => theme.colors.main01};
`;
