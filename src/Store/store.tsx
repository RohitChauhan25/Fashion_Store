import { combineReducers, configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slice/herder";
import loaderReducer from "./slice/loader";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loaderReducer"],
};

const reducer = combineReducers({
  headerReducer: headerSlice,
  loaderReducer: loaderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
