import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authorList: [],
  };
  
  const authorSlices = createSlice({
    name: "author",
    initialState,
    reducers: {
      updateList: (state, actions) => {
        state.authorList = actions.payload;
      },
    },
  });
  
  const { reducer, actions } = authorSlices;
  export const authorActions = actions;
  export default reducer;