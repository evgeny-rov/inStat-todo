import styled from 'styled-components';

export const UserInputWrapper = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputField = styled.input`
  height: 100%;
  width: 80%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledButton = styled.button`
  height: 100%;
  width: 20%;
  margin-left: 1rem;
  background: #fff;
  border-radius: 5px;
  border: 1px solid grey;

  &:hover {
    background: rgba(150, 150, 150, 0.1);
  }
`;
