import React, { useState } from 'react'; 
import { useLoginUserMutation } from '../services/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser] = useLoginUserMutation();
    const dispatch = useDispatch();
    
}