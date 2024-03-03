export const pending = state => {
  state.isLoading = true;
  state.error = null;
};

export const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action;
  console.log(action);
};
