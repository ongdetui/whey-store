import {createSlice} from '@reduxjs/toolkit';
import {Product} from 'models/product';

export interface CartState {
  listCart: Product[];
}

const initialState: CartState = {
  listCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionUpdateCart(state, action) {
      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const {actionUpdateCart} = cartSlice.actions;
export default cartSlice.reducer;
