import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "../api/ApiRickAndMorty";

const store = configureStore({
  reducer: {
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
