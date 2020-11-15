import React from 'react';
import TodoList from './components/Todolist';
import { useStore } from './models/Root';
import {
  AppWrapper,
  TodoContainer,
  UserInputWrapper,
  StyledInputField,
  StyledButton,
} from './styled/general';
import { observer } from 'mobx-react-lite';

const App: React.FC = observer(() => {
  const { userInput, addTodo } = useStore();

  const submitTodo = () => {
    addTodo();
    userInput.handleChange('');
  };

  return (
    <AppWrapper>
      <TodoContainer>
        <UserInputWrapper>
          <StyledInputField
            type="text"
            placeholder="Type in new todo or search existing..."
            value={userInput.value}
            onChange={(e) => userInput.handleChange(e.target.value)}
            autoComplete={'off'}
          />
          <StyledButton
            disabled={userInput.value.length < 1}
            onClick={submitTodo}
          >
            Add
          </StyledButton>
        </UserInputWrapper>
        <TodoList />
      </TodoContainer>
    </AppWrapper>
  );
});

export default App;
