import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  textAlign: string;
}

export const theme = {
  primaryColor: 'green',
  borderRadius: '5px',
  footerLinkSize: '0.875rem',
  footerLinkWeight: 'medium',
  textAlign: 'center',
};

export default styled;
export { css, keyframes, ThemeProvider };
