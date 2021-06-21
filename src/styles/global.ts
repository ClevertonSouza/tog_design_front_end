import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    top: 0px;
    left: 0px;
    background: #F5F6F9 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
`;