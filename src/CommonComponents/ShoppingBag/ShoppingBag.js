import React from 'react'
import './ShoppingBag.css'

function ShoppingBag() {
    return (
        <>
            <div className="shopping_bag_wrapper">
                <div className="sb_title">
                    <h5>Shopping Bag</h5>
                    <h6>(3 Items)</h6>
                </div>
                <div className="sb_list">
                    <div className="row g-0">
                        <div className="col-8">
                            <h6 className="bold">Semi Fitted Panjabi</h6>
                        </div>
                        <div className="col-2 text-center">
                            <h6 className="bold">x1</h6>

                        </div>
                        <div className="col-2 text-end">
                            <h6 className='sb_price'>$ 780.00</h6>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-8">
                            <h6 className="bold">Semi Fitted Panjabi</h6>
                        </div>
                        <div className="col-2 text-center">
                            <h6 className="bold">x1</h6>

                        </div>
                        <div className="col-2 text-end">
                            <h6 className='sb_price'>$ 780.00</h6>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-8">
                            <h6 className="bold">Semi Fitted Panjabi</h6>
                        </div>
                        <div className="col-2 text-center">
                            <h6 className="bold">x1</h6>

                        </div>
                        <div className="col-2 text-end">
                            <h6 className='sb_price'>$ 780.00</h6>
                        </div>
                    </div>
                </div>
                <div className="sb_sub_total">
                    <div className="row g-0">
                        <div className="col-6">
                            <h6 className="bold_cap">SUb-Total</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h6>$ 2,340.00</h6>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-6">
                            <h6 className='bold_cap'>delivery fee</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h6>$ 60.00</h6>
                        </div>
                    </div>
                </div>
                <div className="sb_total">
                    <div className="row g-0">
                        <div className="col-6">
                            <h6 className='bold_cap'>delivery fee</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h4>$ 60.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingBag