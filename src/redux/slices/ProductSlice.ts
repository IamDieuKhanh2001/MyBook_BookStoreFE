import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: '',
  };
  
  const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      updateKeyword: (state, actions) => {
        state.searchKeyword = actions.payload;
      },
    },
  });
  
  const { reducer, actions } = ProductSlice;
  export const productActions = actions;
  export default reducer;