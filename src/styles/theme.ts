import { Theme } from '@emotion/react';

interface FontProps {
  weight: number;
  size: number;
}

function FONT({ weight, size }: FontProps) {
  return `
  font-family: 'SUIT-Regular';
  font-weight: ${weight};
  font-size: ${size}rem;
  letter-spacing: normal;
  `;
}

const fonts = {
  Title01: FONT({ weight: 500, size: 3.5 }),
  Title02: FONT({ weight: 700, size: 3.0 }),
  SubTitle01: FONT({ weight: 500, size: 3.0 }),
  SubTitle02: FONT({ weight: 700, size: 2.0 }),
  SubTitle03: FONT({ weight: 500, size: 1.5 }),
  SubTitle04: FONT({ weight: 500, size: 2.5 }),
  MiniTitle01: FONT({ weight: 500, size: 1.5 }),
};

const colors = {
  main01: '#163020',
  main02: '#315634',
  textColor01: '#567E46',
  textColor02: '#84A755',
  textColor03: '#BAD063',
  bgColor: '#EFF3ED',
};

const theme: Theme = {
  colors,
  fonts,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export default theme;
