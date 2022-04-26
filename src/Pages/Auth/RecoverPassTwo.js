import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../CommonComponents/Logo/Logo';

import './Auth.css';

function RecoverPassTwo() {
  return (
    <section className="page recover_pass two">
            <div className="container">
                <div className="page_logo">
                    <Logo />
                </div>
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>Recover Password</h3>
                        <div className="input_group">
                            <p className="body_text">
                            If we found an account with 
                            <span> email@email.com </span>
                            , an email has been sent. Please check your email in a moment.
                            </p>
                        </div>

                        <div className="dha_box" style={{margin: '0'}}>
                            <p className="body_text">Didn’t receive a link?</p>
                            <button type='submit' className='btn_text sign_up'>resend email</button>
                        </div>
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

export default RecoverPassTwo