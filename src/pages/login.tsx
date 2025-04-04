import React, { useState } from 'react'; 
import { useLoginUserMutation } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password }).unwrap();
            dispatch(setCredentials({ token: response.token, user: response.user }));
            alert('Login Sucessful!')
        } catch (error) {
            console.error('Login failed', error)
        }
    }
    
}