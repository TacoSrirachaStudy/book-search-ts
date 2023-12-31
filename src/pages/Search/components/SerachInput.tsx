import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

interface SearchInputProp {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SerachInput(prop: SearchInputProp) {
  const { userInput, setUserInput } = prop;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <Input
        placeholder="내용을 입력하세요"
        type="text"
        value={userInput}
        onChange={handleSearch}
      />
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
