import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
      background-color: var(--orange);
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      font-family: 'Boogaloo', cursive;
      font-size:22px;
  }

  
:root{
--orange: #f28705;
--blue: #024059;
--azure: #99c8f2;
--mediumgray: #999999;
--lightgray: #F5F5F5;
}

button{
    cursor: pointer;
}

a {
    text-decoration: none;
  }

`;
