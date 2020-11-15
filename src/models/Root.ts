import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

export const UserInput = types
  .model({
    value: types.string,
  })
  .actions((self) => ({
    handleChange(text: string) {
      self.value = text;
    },
  }));

export const Todo = types
  .model({
    id: types.identifierNumber,
    text: types.string,
    isComplete: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggleStatus() {
      self.isComplete = !self.isComplete;
    },
  }));

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
    }
  }));

const initialState = RootModel.create({
  userInput: {
    value: '',
  },
  todos: [{ id: 0, text: 'nice ass', isComplete: false }],
});

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => console.dir(snapshot));

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
