import { createSlice } from '@reduxjs/toolkit';

// LocalStorage'dan savatni olish
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : []; // Agar LocalStorage bo'sh bo'lsa, bo'sh massiv qaytarish
};

// LocalStorage'ga saqlash
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getCartFromLocalStorage(), // Redux store-ni localStorage'dan boshlash
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Agar mahsulot savatda allaqachon mavjud bo'lsa, uning sonini oshirish
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Yangi mahsulot qo'shish va uni sonini 1 qilib belgilash
      }
      saveCartToLocalStorage(state.items); // Mahsulot qo'shildi, localStorage'ga saqlaymiz
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items); // Mahsulot o'chirildi, localStorage'ga saqlaymiz
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity += quantity;
        if (item.quantity <= 0) item.quantity = 1; // Son 0 yoki manfiy bo'lsa, uni 1 qilib belgilash
      }
      saveCartToLocalStorage(state.items); // Mahsulot soni yangilandi, localStorage'ga saqlaymiz
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
