import { types } from 'mobx-state-tree';

export default types
  .model({
    value: types.string,
  })
  .actions((self) => ({
    handleChange(text: string) {
      self.value = text;
    },
  }));
