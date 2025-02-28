import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice'

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ id: "123", name: "Isabella", email: "test@example.com" }))
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
      
        </div>
    );
};

export default Login
