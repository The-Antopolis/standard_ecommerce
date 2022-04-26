import React from 'react'

import '../Auth/Auth.css';

function AddNewDeliveryAddress() {
    return (
        <section className="page login_page">
            <div className="container">
                <div className="centered_form_wrapper">
                    <div className="form_wrapper">
                        <h3>Add New Address</h3>
                        <form action="/">
                            <div className="input_group">
                                <label className="input_field_label caption bold">Address label</label>
                                <input type="text" className="input_field body_text" placeholder='Enter Password' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">Select division</label>
                                <select className='select_field' type="text" defaultValue='deafult'>
                                    <option value="deafult" hidden>Select</option>
                                    <option value=''>Area 1</option>
                                    <option value=''>Area 2</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">select district</label>
                                <select className='select_field' type="text" defaultValue='deafult'>
                                    <option value="deafult" hidden>Select</option>
                                    <option value=''>Area 1</option>
                                    <option value=''>Area 2</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">select area</label>
                                <select className='select_field' type="text" defaultValue='deafult'>
                                    <option value="deafult" hidden>Select</option>
                                    <option value=''>Area 1</option>
                                    <option value=''>Area 2</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">zip code</label>
                                <input type="text" className="input_field body_text" placeholder='zip code' />
                            </div>
                            <div className="input_group">
                                <label className="input_field_label caption bold">Full Address</label>
                                <textarea className='input_field' placeholder='Enter Full Address' name="" id="" cols="30"
                                    rows="4"></textarea>
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

export default AddNewDeliveryAddress