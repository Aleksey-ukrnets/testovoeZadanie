import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
