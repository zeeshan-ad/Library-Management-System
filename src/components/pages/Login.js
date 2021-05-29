import React from 'react';
import './Login.css';

function Login() {
    return(
        <div className='LoginForm'>
            <div className='FormHeader'>
            <h3>Welcome Back,</h3>
            <p>Enter your email and password to login.</p>
            </div>
            <form>
                <input type='email' name='email' placeholder='Email'/>
                <input type='password' name='password' placeholder='Password'/>
                <input type='submit' value='Login'/>
                <input type='checkbox'/>
                <span>Remember Me</span>
            </form>
        </div>
    )
}

export default Login
