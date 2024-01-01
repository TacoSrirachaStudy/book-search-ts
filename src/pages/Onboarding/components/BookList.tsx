/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Image from '../assets/image.png';
import { css } from '@emotion/react';

/** 책 한 권 */
export function BookItem() {
  return (
    <li css={bookItemSize}>
      <img css={imageSize} src={Image} alt="book-cover" />
    </li>
  );
}

/** 책들 리스트 */
export default function BookList() {
  return (
    <OnboardingBookList>
      <CarouselArrowLeft>&lt;</CarouselArrowLeft>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <CarouselArrowRight>&gt;</CarouselArrowRight>
    </OnboardingBookList>
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

// 네이밍 제가 지었지만 참 그지 같네여;;;
const OnboardingBookList = styled.ul`
  scrollbar-width: none;

  overflow: auto;
  display: flex;
  gap: 4rem;

  box-sizing: border-box;
  width: 100vw;
  height: 370px;
  padding: 0 5rem;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
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
`;

const CarouselArrowLeft = styled(CarouselArrow)`
  left: 1rem;
`;
const CarouselArrowRight = styled(CarouselArrow)`
  right: 1rem;
`;
