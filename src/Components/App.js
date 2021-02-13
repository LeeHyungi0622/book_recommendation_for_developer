import React, {Component} from "react";
import Router from "./Router";
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    font-family: 'Nanum Barun Gothic', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

class App extends Component {

  render(){
    return (
      <>
        <Router/>
        <GlobalStyled />
      </>
    )
  }
}

export default App;
