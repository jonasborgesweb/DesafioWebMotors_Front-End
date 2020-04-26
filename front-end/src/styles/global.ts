import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0

  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: #f3f5f8;
    color: #fff;
  }

  body, input , button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }



`;
