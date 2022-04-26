import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../CommonComponents/Logo/Logo';

import './Auth.css';

function Login() {
    return (
        <section className="page login_page">
            <div className="container">
                <div className="page_logo">
                    <Logo />
                </div>
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>login</h3>
                        <form action="/">
                            <div className="input_group">
                                <label className="input_field_label caption bold">Email</label>
                                <input type="email" className="input_field body_text" placeholder='Enter Email' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">password</label>
                                <input type="password" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <button type='submit' className='btn_text btn_fill w-100'>login</button>
                        </form>

                        <Link to='/' className='btn_text forgot_pass'>Forgot Password?</Link>
                        <div className="dha_box">
                            <p className="body_text">Don’t have an account?</p>
                            <Link to='/signup' className='btn_text sign_up'>sing up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login