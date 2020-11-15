import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../models/Root';
import TodoItem from './TodoItem';
import { StyledTodoList } from '../styled/todo';

const TodoList: React.FC = observer(() => {
  const { filteredTodos } = useStore();

  return (
    <StyledTodoList>
      {filteredTodos.map(({ id, text, isComplete, toggleStatus }) => {
        return (
          <TodoItem
            key={id}
            id={id}
            text={text}
            isComplete={isComplete}
            toggleStatus={toggleStatus}
          />
        );
      })}
    </StyledTodoList>
  );
});

export default TodoList;
