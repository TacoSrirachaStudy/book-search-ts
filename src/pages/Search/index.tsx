import useSWR, { useSWRConfig } from 'swr';
import SearchWrapper from './components/SearchWrapper';
import { fetcher } from '@utils/fetcher';
import { useState } from 'react';

// 검색화면입니다.
export default function Search() {
  const [userInput, setUserInput] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const { data, error, isLoading } = useSWR(
    `https://dapi.kakao.com/v3/search/book?query=${confirmValue}`,
    fetcher
  );

  return (
    <>
      <SearchWrapper
        userInput={userInput}
        setUserInput={setUserInput}
        confirmValue={confirmValue}
        setConfirmValue={setConfirmValue}
      />
      <button
        onClick={() => {
          console.log(data.documents);
        }}
      >
        흑흑
      </button>
    </>
  );
}
