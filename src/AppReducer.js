import { createSlice } from '@reduxjs/toolkit';

export const appShake = createSlice({
  name: 'shake',
  initialState: {
    shake: null,
    finalize: false
  },
  reducers: {
    shake: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.shake = true;

    },
    finishShake: state => {
        state.shake = false;
    },
    finalize: state => {
      state.finalize = true
    },
    reset: state => {
      state.finalize = false;
      state.shake = null
    }
  },
});

export const { shake, finishShake, finalize, reset } = appShake.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.shake.shake;

export default appShake.reducer;
