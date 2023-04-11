import React from 'react'

const Login = () => (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Talk</span>
            <span className='title'>Register</span>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
)

export default Login