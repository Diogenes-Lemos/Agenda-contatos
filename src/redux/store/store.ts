import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../../Reducers/contactSlice"
import sBarReducer from "../../Reducers/sidebarSlice"

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    sidebar: sBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;