import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

export default function SerachInput() {
  return (
    <>
      <div>ddd</div>
      <Input placeholder="내용을 입력하세요" type="text" />
    </>
  );
}

const Input = styled.input`
  ${commonFlex}
  width: 12.03rem;
  height: 10rem;
  border-radius: 50px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
`;
