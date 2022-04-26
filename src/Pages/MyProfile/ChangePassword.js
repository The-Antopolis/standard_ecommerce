import React from 'react'

import '../Auth/Auth.css';

function ChangePassword() {
    return (
        <section className="page login_page">
            <div className="container">
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>Change Password</h3>
                        <form action="/">
                            <div className="input_group">
                                <label className="input_field_label caption bold">current password</label>
                                <input type="password" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">New password</label>
                                <input type="password" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">confirm password</label>
                                <input type="password" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <button type='submit' className='btn_text btn_fill w-100'>save new password</button>
                            <button type='submit' className='btn_text btn_border w-100 head_less'>cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword