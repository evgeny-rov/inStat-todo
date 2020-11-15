import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const AppWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: #ffe6d3;
`;

export const TodoContainer = styled.div`
  width: min(100%, 500px);
  height: 700px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 5px 5px rgb(215, 195, 190);
`;
