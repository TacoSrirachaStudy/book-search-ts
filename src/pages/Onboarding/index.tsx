import styled from '@emotion/styled';
import BookList from './components/BookList';
import Button from './components/Button';
import { commonFlex } from '@styles/common';

/** 온보딩 페이지 */
export default function Onboarding() {
  return (
    <OnboardingWrapper>
      <BookList />
      <Button />
    </OnboardingWrapper>
  );
}

const OnboardingWrapper = styled.div`
  ${commonFlex}
  transform: translateY(-50%);
  flex-direction: column;
  gap: 3rem;
  margin-top: 50vh;
`;
