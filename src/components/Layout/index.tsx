import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { commonFlex } from '@styles/common';

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${commonFlex}
`;
