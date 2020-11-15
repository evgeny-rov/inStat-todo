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
  background: #FFE6D3;
`;

export const TodoContainer = styled.div`
  position: relative;
  width: min(100%, 500px);
  height: 700px;
  background: grey;
  border-radius: 10px;
  background: #FFF;
  padding: 1rem;
  display: grid;
  place-items: center;
  box-shadow: 3px 5px 5px rgb(215, 195, 190);
`;

export const UserInputWrapper = styled.div`
  position: absolute;
  top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const StyledInputField = styled.input`
  height: 2rem;
  width: 80%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledButton = styled.button`
  height: 2rem;
  width: 20%;
  margin-left: 1rem;
  border: none;
  background: white;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const StyledTodoList = styled.ul`
  list-style: none;
  height: 100%;
  width: 100%;
  padding-inline-start: 0;
  margin: 0;
  padding-top: 3rem;
`;

export const StyledListItem = styled.li`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px #C0C0C0;
  cursor: pointer;

  &:hover, &:focus {
    background: rgba(150, 150, 150, 0.1);
  }

  span {
    margin-left: 1rem;
  }
`;