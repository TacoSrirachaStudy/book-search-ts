/** @jsxImportSource @emotion/react */

import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

/** 상세 페이지 */
export default function Detail() {
  const { title } = useParams();
  const { data } = useSWR(`https://dapi.kakao.com/v3/search/book?query=${title}`, fetcher);

  return (
    <DetailWrapper>
      {data && (
        <DetailBox>
          <img src={data[0].thumbnail} alt="book-cover" width={270} height={400} />
          <article>
            <h1 css={mainTitle}>{data[0].title}</h1>
            <div css={bookInfo}>
              <span>{data[0].authors}</span>
              <span>{data[0].publisher}</span>
              <span>{data[0].price}</span>
            </div>
            <p css={bookContent}>{data[0].contents}</p>
          </article>
        </DetailBox>
      )}
    </DetailWrapper>
  );
}

const mainTitle = css`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const bookInfo = css`
  display: flex;
  gap: 3rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const bookContent = css`
  font-size: 2.4rem;
`;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 0 12rem;
  margin: 0 auto;
`;

const DetailBox = styled.div`
  display: flex;
  gap: 4.5rem;
  max-width: 120rem;
  margin: 50vh auto;
  color: ${({ theme }) => theme.colors.textColor01};
  transform: translateY(-50%);
`;
