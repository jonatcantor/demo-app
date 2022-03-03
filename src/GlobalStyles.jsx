import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  html, body {
    min-width: 320px;
    font-size: 16px;
  }

  button {
    background: none;
    cursor: pointer;
  }
`

export default GlobalStyles
