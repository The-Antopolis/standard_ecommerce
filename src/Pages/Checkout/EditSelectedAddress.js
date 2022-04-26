import React from 'react'
import { Link } from 'react-router-dom'
import IconEdit from '../../CommonComponents/Icons/IconEdit'
import ShoppingBag from '../../CommonComponents/ShoppingBag/ShoppingBag'
import './Checkout.css'


function EditSelectedAddress() {
    return (
        <>
            <section className='address_wrapper'>
                <div className="container">
                    <h2>Checkout</h2>
                    <div className="row">
                        <div className="col-lg-6 order-2 order-md-1">
                            <div className="form_wrapper">
                                <h4>Delivery Info</h4>
                                <div className="input_group">
                                    <div className="default_info">
                                        <div className="edit_btn">
                                            <Link className='btn_text' to='/edit-info'>edit</Link>
                                            <IconEdit />
                                        </div>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="info_content">
                                                    <p className='caption bold'> Name</p>
                                                    <p className="body_text"> Niloy Barua </p>
                                                </div>
                                            </div>
                                            <div className="col-7 ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Name</p>
                                                    <p className="body_text"> Niloy Barua </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h4>Delivery Address</h4>
                                <form action="" className='input_wrapper'>
                                    <div className="row">
                                        <div className="col-md-6 col-12 ">
                                            <div className="input_group m-sm-0">
                                                <label className="input_field_label caption bold">Select division</label>
                                                <select className='select_field' type="text" defaultValue='deafult'>
                                                    <option value="deafult" hidden>Select</option>
                                                    <option value=''>Area 1</option>
                                                    <option value=''>Area 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 ">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">Select district</label>
                                                <select className='select_field' type="text" defaultValue='deafult'>
                                                    <option value="deafult" hidden>Select</option>
                                                    <option value=''>Area 1</option>
                                                    <option value=''>Area 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">Select division</label>
                                                <select className='select_field' type="text" defaultValue='deafult'>
                                                    <option value="deafult" hidden>Select</option>
                                                    <option value=''>Area 1</option>
                                                    <option value=''>Area 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">Full Address</label>
                                                <textarea className='input_field' placeholder='Enter Full Address' name="" id="" cols="30"
                                                    rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">Zip Code</label>
                                                <input className='input_field' placeholder='Enter ZIP code' name="" id="" />
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="input_group">
                                                        <button type='submit' className='btn_text btn_border w-100 '>Cancel</button>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="input_group">
                                                        <button type='submit' className='btn_text btn_fill w-100 '>save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>

                                <h4>Payment Info</h4>
                                <p className='body_text'> Cash on Delivery is available right now</p>

                                <div className="row payment_info">
                                    <div className="col-md-6 col-12">
                                        <div className="input_group m-sm-0">
                                            <button type='submit' className='btn_text btn_border w-100 head_less '>continue shopping</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input_group">
                                            <button type='submit' className='btn_text btn_fill w-100 head_less '>confirm order</button>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-md-2">
                            <ShoppingBag />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default EditSelectedAddress