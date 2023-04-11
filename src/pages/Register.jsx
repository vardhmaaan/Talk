import React from 'react'
import Add from "../image/adAvatar.png"

const Register = () => (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Talk</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Display Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <input style={{display:"none"}} type='file' id="file" />
                <label htmlFor='file'>
                    <img src={Add} alt=""/>
                    <spam>Add an avatar</spam>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
)

export default Register