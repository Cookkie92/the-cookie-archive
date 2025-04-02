// // src/styles/GlobalStyles.js
// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   body {
//     font-family: 'Arial', sans-serif;
//     background:rgb(253, 243, 223);
//     color: #333;
//   }
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `;

// export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset & base */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.primary};
  }

  

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export default GlobalStyle;

// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${({ theme }) => theme?.colors?.background || "#ffffff"};
//     color: ${({ theme }) => theme?.colors?.text || "#000000"};
//     font-family: ${({ theme }) => theme?.fonts?.body || "sans-serif"};
//   }
// `;

// export default GlobalStyle;
