/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import useSWR from 'swr';
import { css } from '@emotion/react';
import { fetcher } from '@utils/fetcher';
import { useState } from 'react';

interface imgSrcType {
  thumbnail: string;
}

/** 책 한 권 */
export function BookItem({ thumbnail }: imgSrcType) {
  return (
    <li css={bookItemSize}>
      <img css={imageSize} src={thumbnail} alt="book-cover" />
    </li>
  );
}

/** 책들 리스트 */
export default function BookList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useSWR('https://dapi.kakao.com/v3/search/book?query=all', fetcher);

  const handleCarouselLeft = () => {
    activeIndex === 0 ? setActiveIndex(data.length - 1) : setActiveIndex((prev) => (prev -= 1));
  };

  const handleCarouselRight = () => {
    activeIndex === data.length - 1 ? setActiveIndex(0) : setActiveIndex((prev) => (prev += 1));
  };

  return (
    <OnboardingWrapper>
      <CarouselArrowLeft onClick={handleCarouselLeft}>&lt;</CarouselArrowLeft>
      <OnboardingBookList $activeIndex={activeIndex}>
        {data?.map(({ thumbnail }: imgSrcType) => <BookItem thumbnail={thumbnail} />)}
      </OnboardingBookList>
      <CarouselArrowRight onClick={handleCarouselRight}>&gt;</CarouselArrowRight>
    </OnboardingWrapper>
  );
}

const bookItemSize = css`
  flex-shrink: 0;
  width: 250px;
  height: 100%;
`;

const imageSize = css`
  width: 100%;
  height: 100%;
`;

const OnboardingWrapper = styled.div`
  scrollbar-width: none;

  overflow-x: auto;

  width: 100vw;
  height: 370px;
  padding: 0 5rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

interface InOnboardingBookListProps {
  $activeIndex: number;
}
// 네이밍 제가 지었지만 참 그지 같네여;;;
const OnboardingBookList = styled.ul<InOnboardingBookListProps>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 4rem;
  transition: all 0.3s ease;
  transform: ${({ $activeIndex }) =>
    `translateX(calc(50vw - 5rem - ((25rem) / 2) - ${$activeIndex * 29}rem))`};
  /* 전체 너비 - 왼쪽 화살표 아이콘 크기 - 이미지 절반 - 해당 index*/
`;

const CarouselArrow = styled.div`
  cursor: pointer;

  position: fixed;
  top: 12.5rem;
  transform: translateY(100%);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.5rem;

  font-size: 5rem;
  z-index: 1;
`;

const CarouselArrowLeft = styled(CarouselArrow)`
  left: 1rem;
`;
const CarouselArrowRight = styled(CarouselArrow)`
  right: 1rem;
`;
