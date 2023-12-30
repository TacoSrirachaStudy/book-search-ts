import useSWR from 'swr';
import styled from '@emotion/styled';
import SearchWrapper from './components/SearchWrapper';
import { fetcher } from '@utils/fetcher';
import { useState } from 'react';
import Books from './components/Books';
import { commonFlex } from '@styles/common';
import { Book } from 'types/books';

// 검색화면입니다.
export default function Search() {
  const [userInput, setUserInput] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const { data } = useSWR(
    confirmValue ? `https://dapi.kakao.com/v3/search/book?query=${confirmValue}` : null,
    fetcher
  );

  return (
    <Container>
      <SearchWrapper
        userInput={userInput}
        setUserInput={setUserInput}
        confirmValue={confirmValue}
        setConfirmValue={setConfirmValue}
      />

      <BooksContainer>
        {data &&
          data.map((book: Book) => {
            const { authors, contents, title, isbn, thumbnail } = book;
            return (
              <Books
                key={isbn}
                title={title}
                thumbnail={thumbnail}
                authors={authors}
                contents={contents}
              />
            );
          })}
      </BooksContainer>
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}
  flex-direction: column;
`;

const BooksContainer = styled.section`
  ${commonFlex}
  flex-direction: column;
  gap: 4rem;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.bgColor};
`;
