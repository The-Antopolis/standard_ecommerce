import React from 'react'
import ShoppingBag from '../../CommonComponents/ShoppingBag/ShoppingBag'
import './Checkout.css'


function EditInfo() {
    return (
        <>
            <section className='address_wrapper'>
                <div className="container">
                    <h2>Checkout</h2>
                    <div className="row">
                        <div className="col-lg-6 order-2 order-md-1">
                            <div className="form_wrapper">
                                <h4>Delivery Info</h4>
                                <form action="" className='input_wrapper'>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">Name</label>
                                                <input className='input_field' placeholder='Enter Your Name' name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input_group">
                                                <label className="input_field_label caption bold">contact no.</label>
                                                <input className='input_field' placeholder='Enter your contact no.' name="" id="" />
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

                                <h4>Payment Info</h4>
                                <p className='body_text'> Cash on Delivery is available right now</p>

                                <div className="row payment_info">
                                    <div className="col-12 col-md-6">
                                        <div className="input_group">
                                            <button type='submit' className='btn_text btn_border w-100 head_less'>continue shopping</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="input_group">
                                            <button type='submit' className='btn_text btn_fill w-100 head_less'>confirm order</button>
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

export default EditInfo