import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromLiked: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToLiked, removeFromLiked } = wishlistSlice.actions;
export default wishlistSlice.reducer;
