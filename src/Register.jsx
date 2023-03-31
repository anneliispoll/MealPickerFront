import React, { useState } from "react";
import api from './api/axiosConfig';



export const Register = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await api.post('/register', { 
              firstname: firstname,
              lastname: lastname, 
              email: email,
              password: password
            });
        
            setIsRegistered(true); // update the isRegistered state variable to true
          } catch (error) {
            console.error(error);
            alert("This e-mail is already registered. Choose unique e-mail. If you already have an account, you can login.")
    }
};


    return (
        <div className="auth-form-container">
            {isRegistered && <p>Registration successful! You can now login!</p>}
            <h2>Register</h2>
            < form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name</label>
                <input value={firstname} name="firstname" onChange={(e) => setFirstname(e.target.value)} id="firstname" placeholder="First name" />
                <label htmlFor="lastname">Last name</label>
                <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} id="lastname" placeholder="Last name" />
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="Email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password"/>
                 <button type="submit">Register</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
