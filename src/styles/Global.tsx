import { Global, css } from '@emotion/react';
import resetStyle from './resetStyle';

const style = css`
  ${resetStyle}

  @font-face {
    font-family: 'SUIT-Regular';
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2')
      format('woff2');
  }
  html,
  body {
    margin: 0;
    padding: 0;

    font-size: 62.5%;
    color: #fff;

    background-color: #000;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
