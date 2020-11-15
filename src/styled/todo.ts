import styled from 'styled-components';

export const StyledTodoList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem;
  overflow-y: auto;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px #c0c0c0;
  cursor: pointer;

  &:hover {
    background: rgba(150, 150, 150, 0.1);
  }
`;

export const StyledSpan = styled.span<{ crossed: boolean }>`
  text-decoration: ${({crossed}) => crossed ? 'line-through' : 'none'};
  color: ${({crossed}) => crossed ? '#5d5d5d' : '#000'};
  margin-left: 1rem;
`;
