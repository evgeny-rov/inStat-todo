import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../models/Root';
import { StyledButton, StyledInputField, UserInputWrapper } from '../styled/userInput';

const UserInput: React.FC = observer(() => {
  const { userInput, addTodo } = useStore();

  const submitTodo = () => {
    addTodo();
    userInput.handleChange('');
  };

  return (
    <UserInputWrapper>
      <StyledInputField
        type="text"
        placeholder="Type in new todo or filter existing..."
        value={userInput.value}
        onChange={(e) => userInput.handleChange(e.target.value)}
        autoComplete={'off'}
      />
      <StyledButton disabled={userInput.value.length < 1} onClick={submitTodo}>
        Add
      </StyledButton>
    </UserInputWrapper>
  );
});

export default UserInput;
