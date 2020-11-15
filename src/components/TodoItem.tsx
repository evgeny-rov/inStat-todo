import React from 'react';
import { Instance } from 'mobx-state-tree';
import Todo from '../models/Todo';
import { StyledListItem, StyledSpan } from '../styled/todo';

type props = Instance<typeof Todo>

const TodoItem: React.FC<props> = ({ text, isComplete, toggleStatus }) => {
  return (
    <StyledListItem onClick={toggleStatus}>
      <input type="checkbox" checked={isComplete} readOnly />
      <StyledSpan crossed={isComplete}>{text}</StyledSpan>
    </StyledListItem>
  );
};

export default TodoItem;
