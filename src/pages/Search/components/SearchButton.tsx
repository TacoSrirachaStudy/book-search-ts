import SearchIcon from '@assets/searchIc.svg';
import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

interface SearchButtonProps {
  userInput: string;
  setConfirmValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchButton(props: SearchButtonProps) {
  const { userInput, setConfirmValue } = props;

  function handleButton() {
    setConfirmValue(userInput);
  }

  return (
    <IconButton type="button" onClick={handleButton}>
      <img src={SearchIcon} alt="버튼" />
    </IconButton>
  );
}

const IconButton = styled.button`
  ${commonFlex}
  position: absolute;
  right: 5rem;
`;
