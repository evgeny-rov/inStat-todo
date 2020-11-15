import React from 'react';
import TodoList from './components/Todolist';
import UserInput from './components/UserInput';
import { AppWrapper, TodoContainer } from './styled/general';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <TodoContainer>
        <UserInput />
        <TodoList />
      </TodoContainer>
    </AppWrapper>
  );
};

export default App;
