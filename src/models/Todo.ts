import { types } from 'mobx-state-tree';

export default types
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
