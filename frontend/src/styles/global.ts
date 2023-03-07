import { createGlobalStyle } from 'styled-components';

import { titleColor } from './variables';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${titleColor};
    font-family: Ubuntu;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  :root {
    --very-dark-grayish-blue: hsl(217, 19%, 35%);
    --grayish-blue: hsl(212, 23%, 69%);
    --desaturated-dark-blue: hsl(214, 17%, 51%);
    --light-dark-blue: hsl(210, 46%, 95%);
    --white: hsl(0, 0%, 100%);

    --fs-13: 13px;

    @media screen and (max-width: 768px) {
      --fs-13: 12px;
    }
  }
`;
