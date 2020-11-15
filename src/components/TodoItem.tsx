import React from 'react';
import { Instance } from 'mobx-state-tree';
import { Todo } from '../models/Root';
import { StyledListItem } from '../styled/general';

type props = Instance<typeof Todo>

const TodoItem: React.FC<props> = ({ text, isComplete, toggleStatus }) => {
  return (
    <StyledListItem onClick={toggleStatus}>
      <input type="checkbox" checked={isComplete} readOnly />
      <span>{text}</span>
    </StyledListItem>
  );
};

export default TodoItem;
