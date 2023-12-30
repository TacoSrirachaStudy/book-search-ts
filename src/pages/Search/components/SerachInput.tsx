import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

export default function SerachInput() {
  return (
    <>
      <Input placeholder="내용을 입력하세요" type="text" />
    </>
  );
}

const Input = styled.input`
  ${commonFlex}
  width: 120rem;
  height: 10rem;
  padding-left: 4rem;

  color: ${({ theme }) => theme.colors.textColor01};

  ${({ theme }) => theme.fonts.SubTitle01};
  border: 3px solid ${({ theme }) => theme.colors.main01};
  border-radius: 50px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
`;
