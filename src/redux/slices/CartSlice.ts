import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, actions) => {
      state.cartItem = actions.payload;
    },
    addFirst: (state, action) => {
        //Add item to first index
        const newItem: any = [action.payload, ...state.cartItem];
        state.cartItem = newItem;
    },
    deleteCartItemById: (state, actions) => {
        //Remove item in list with id
        const idToRemove = actions.payload;
        state.cartItem = state.cartItem.filter((item: any) => item.id !== idToRemove);
    },
  },
});

const { reducer, actions } = CartSlice;
export const cartActions = actions;
export default reducer;