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

  border: 3px solid;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.main02};
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
`;
