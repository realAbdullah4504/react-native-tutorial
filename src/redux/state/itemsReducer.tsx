// itemsSlice.js
import {createSlice} from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: 5,
  },
  reducers: {
    addItem: (state, action) => {
      state.items += 1;
    },
    // Add more actions as needed
  },
});

export const {addItem} = itemsSlice.actions;
export default itemsSlice.reducer;
