
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage uchun
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishiesSlice"; // Wishlist reducer

// Redux Persist konfiguratsiyasi
const persistConfig = {
  key: "root",
  storage,
};

// Barcha reducerlarni birlashtirish
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer, // Wishlistni root reducerga qo'shish
});

// Persist qilingan reducerni yaratish
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store
export const store = configureStore({
  reducer: persistedReducer,
});

// Persistor
export const persistor = persistStore(store);

