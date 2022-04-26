import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../CommonComponents/Logo/Logo';

import './Auth.css';

function RecoverPassOne() {
    return (
        <section className="page recover_pass">
            <div className="container">
                <div className="page_logo">
                    <Logo />
                </div>
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>Recover Password</h3>
                        <form action="/">
                            <div className="input_group">
                                <label className="input_field_label caption bold">Email</label>
                                <input type="email" className="input_field body_text" placeholder='Enter Email' />
                                <p className="status mt-2">We’ll email you a link that will let you change your password</p>
                            </div>
                            <button type='submit' className='btn_text btn_fill w-100'>send email</button>
                        </form>

                        <div className="dha_box">
                            <p className="body_text">Already have an account?</p>
                            <Link to='/login' className='btn_text sign_up'>log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecoverPassOne