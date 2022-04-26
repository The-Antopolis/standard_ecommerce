import React from 'react'
import { Link } from 'react-router-dom'
import IconEdit from '../../CommonComponents/Icons/IconEdit'
import ShoppingBag from '../../CommonComponents/ShoppingBag/ShoppingBag'
import './Checkout.css'

function AddressSelected() {
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
                                <div className="row">
                                    <div className="col-12 col-md-7">
                                        <div className="input_group m-sm-0">
                                            <label className="input_field_label caption bold">your address</label>
                                            <select className='select_field' type="text" defaultValue='deafult'>
                                                <option value="deafult" hidden>Select</option>
                                                <option value=''>Area 1</option>
                                                <option value=''>Area 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="input_group">
                                            <button type='submit' className='btn_text btn_border w-100 head_less'>add new address</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="input_group">
                                    <div className="default_info">
                                        <div className="edit_btn">
                                            <Link className='btn_text' to='/edit-address-selected'>edit</Link>
                                            <IconEdit />
                                        </div>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="info_content">
                                                    <p className='caption bold'> Division</p>
                                                    <p className="body_text"> Dhaka </p>
                                                </div>
                                            </div>
                                            <div className="col-7 ">
                                                <div className="info_content">
                                                    <p className='caption bold'> division</p>
                                                    <p className="body_text"> Dhaka </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="info_content">
                                                    <p className='caption bold'> area</p>
                                                    <p className="body_text"> Gulshan </p>
                                                </div>
                                            </div>
                                            <div className="col-7  ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Zip code</p>
                                                    <p className="body_text"> 1401 </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="info_content">
                                                    <p className='caption bold'> Full address</p>
                                                    <p className="body_text"> H-54, R-8, Niketan, Gulshan, Dhaka  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>Payment Info</h4>
                                <p className='body_text'> Cash on Delivery is available right now</p>

                                <div className="row payment_info">
                                    <div className="col-12 col-md-6">
                                        <div className="input_group m-sm-0">
                                            <button type='submit' className='btn_text btn_border w-100 head_less '>continue shopping</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
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

export default AddressSelected