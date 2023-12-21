import { Theme } from '@emotion/react';

const colors = {
  main01: '#163020',
  main02: '#315634',
  textColor01: '#567E46',
  textColor02: '#84A755',
  textColor03: '#BAD063',
  bgColor: '#EFF3ED'
}

const theme: Theme = {
  colors,
};

export type ColorsTypes = typeof colors;
export default theme;
