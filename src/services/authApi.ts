import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginUser } from '../features/userSlice';

const API_URL = 'https://localhost:5000/api'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (userData) => ({
                url: "/auth/login",
                method: "POST",
                body: userData,
                
            }),
        }),
            registerUser: builder.mutation({
                query: (userData) => ({
                    url: "/auth/register",
                    method: "POST",
                    body: userData,
                }),

            }),
                getJobs: builder.query({
                    query: (token) => ({
                        url: "/jobs",
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                }),
    
    }),
});
export const { useLoginUserMutation, useRegisterUserMutation, useGetJobsQuery } = authApi;