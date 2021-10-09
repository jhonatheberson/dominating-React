import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0; /* removendo margin */
    padding: 0; /* removendo padding */
    outline: 0; /* removendo outline */
    box-sizing: border-box; /* evita quebra de leyaout, os elementos fica somando, o conteudo é exprimido */
  }

  html, body, #root {
    min-height: 100%; /* ocupando 100% da pagina */
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased ! important
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

