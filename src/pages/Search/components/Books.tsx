import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';
import { Book } from 'types/books';

export default function Books(props: Book) {
  const { authors, contents, title, thumbnail } = props;
  return (
    <Container>
      <BookImg alt="책 표지" src={thumbnail} />
      <SummaryContainer>
        <Title>{title}</Title>
        <Auther>{authors}</Auther>
        <Summary>{contents}</Summary>
      </SummaryContainer>
    </Container>
  );
}

const Container = styled.article`
  ${commonFlex}
  gap: 4rem
`;

const BookImg = styled.img`
  ${commonFlex}
  width: 12rem;
  height: 17.5rem;
`;

const SummaryContainer = styled.div`
  ${commonFlex}
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.main01};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.SubTitle02};
`;

const Auther = styled.p`
  ${({ theme }) => theme.fonts.MiniTitle01};
`;

const Summary = styled.p`
  ${({ theme }) => theme.fonts.SubTitle03};
`;
