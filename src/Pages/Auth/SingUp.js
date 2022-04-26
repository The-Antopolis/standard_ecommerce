import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../CommonComponents/Logo/Logo';

import './Auth.css';

function SingUp() {
    return (
        <section className="page login_page">
            <div className="container">
                <div className="page_logo">
                    <Logo />
                </div>
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>Sign Up</h3>
                        <form action="/">
                            <div className="input_group">
                                <div className="row">
                                    <div className="col-12 col-sm-6 input_group">
                                        <label className="input_field_label caption bold">First Name</label>
                                        <input type="text" className="input_field body_text" placeholder='First Name' />
                                    </div>
                                    <div className="col-12 col-sm-6 ">
                                    <label className="input_field_label caption bold">last Name</label>
                                        <input type="text" className="input_field body_text" placeholder='last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">Email</label>
                                <input type="email" className="input_field body_text" placeholder='Enter Email' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">password</label>
                                <input type="password" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">confirm password</label>
                                <input type="password" className="input_field body_text" placeholder='Confirm Password' />
                            </div>
                            <button type='submit' className='btn_text btn_fill w-100'>create your account</button>
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

export default SingUp