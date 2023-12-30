import SearchIcon from '@assets/searchIc.svg';
import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

export default function SearchButton() {
  return (
    <IconButton type="button">
      <img src={SearchIcon} alt="버튼" />
    </IconButton>
  );
}

const IconButton = styled.button`
  ${commonFlex}
  position: absolute;
  right: 50rem;
`;
