import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from './api/axiosConfig';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://localhost:8080/api/v1/auth/authenticate', { email, password });
            if (response.status === 200) {
                const data = response.data;
                localStorage.setItem('token', data.token);
                navigate('/mealpicker');
            } else {
                console.error('Login failed');
                
            }
        } catch (error) {
            console.error(error);
            alert("Username or password is incorrect")
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password"/>
                 <button type="submit">Log In</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
