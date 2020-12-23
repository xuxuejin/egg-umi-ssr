export default {
  namespace: 'home',
  state: {
    title: '初始的title',
  },

  effects: {},

  reducers: {
    changeTitle(state, { payload }) {
      state.title = '更改的title';
    },
  },
};
