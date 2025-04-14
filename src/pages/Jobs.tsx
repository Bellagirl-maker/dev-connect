import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useGetJobsQuery } from '../services/authApi';

const Jobs = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const { data: Jobs, error } = useGetJobsQuery(token);
}