import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../features/jobSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobReducer,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;