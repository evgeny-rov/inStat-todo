import { useContext, createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import UserInput from './UserInput';
import Todo from './Todo';

const RootModel = types
  .model({
    userInput: UserInput,
    todos: types.optional(types.array(Todo), []),
  })
  .actions((self) => ({
    addTodo() {
      const id = Date.now();
      self.todos.push({ id, text: self.userInput.value });
    },
  }))
  .views((self) => ({
    get filteredTodos() {
      const comparedSubstring = self.userInput.value.toLowerCase();
      return self.todos.filter(
        ({ text }) => text.toLowerCase().indexOf(comparedSubstring) !== -1
      );
    },
  }));

const initialState = RootModel.create({
  userInput: {
    value: '',
  },
  todos: [{ id: 0, text: 'first todo', isComplete: false }],
});

export const rootStore = initialState;
export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const Provider = RootStoreContext.Provider;

export const useStore = () => {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null');
  }
  return store;
};
