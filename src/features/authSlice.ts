import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    user: { id: string; name: string; email: string; } | null;
}