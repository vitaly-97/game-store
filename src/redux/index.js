import { configureStore } from "@reduxjs/toolkit";
import reducerCart from "./cart/reducer";
import reducerGame from "./game/reducer";

export const store = configureStore({
  reducer: {
    cart: reducerCart,
    game: reducerGame,
  },
});
