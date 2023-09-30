import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slice/TodoSlice";
const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store