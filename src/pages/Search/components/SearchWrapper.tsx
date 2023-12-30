import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';
import SerachInput from './SerachInput';
import SearchButton from './SearchButton';
import { useState } from 'react';

export default function SearchWrapper() {
  const [userInput, setUserInput] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  return (
    <Wrapper>
      <Container>
        <SerachInput userInput={userInput} setUserInput={setUserInput} />
        <SearchButton userInput={userInput} setConfirmValue={setConfirmValue} />
      </Container>
      <Result>
        <SearchResult>{confirmValue}</SearchResult> 에 대한 검색 결과 입니다.
      </Result>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.7rem;
  width: 120rem;
`;

const Container = styled.section`
  ${commonFlex}
  position: relative;
  width: 120rem;
`;

const Result = styled.p`
  ${commonFlex}
  gap: 2.1rem;
  justify-content: flex-start;
  margin-left: 4rem;
  ${({ theme }) => theme.fonts.SubTitle02};
  color: ${({ theme }) => theme.colors.textColor01};
`;

const SearchResult = styled.p`
  ${({ theme }) => theme.fonts.Title01};
  color: ${({ theme }) => theme.colors.main01};
`;
