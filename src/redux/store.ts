import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../features/jobSlice';
import userReducer from '../features/userSlice';
import { authApi } from "../services/authApi";

export const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;