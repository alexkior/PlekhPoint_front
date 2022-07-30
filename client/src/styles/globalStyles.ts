import { createGlobalStyle } from 'styled-components';

export type DeviceType = 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'laptop' | 'laptopL' | 'desktop'

const deviceSize: Record<DeviceType, string> = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const deviceStyle: Record<DeviceType, string> = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
};

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

  body {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    min-height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media ${deviceStyle.mobileL} {
    body {
      overflow-x: hidden;
      width: 100%;
      height: 100%;
      min-height: 500px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  a {
    text-transform: none;
    text-decoration: none;
  }

`;

export default GlobalStyle;
