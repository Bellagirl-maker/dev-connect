import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userState {
    id: string | null;
    name: string;
    email: string;
    isAuthenticated: boolean;
}

const initialState: userState = {
    id: null,
    name: "",
    email: "",
    isAuthenticated: false,
}; 

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ id: string; name: string; email: string }>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },

        logoutUser: (state) => {
            state.id = null;
            state.name = "";
            state.email = "";
            state.isAuthenticated = false;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;