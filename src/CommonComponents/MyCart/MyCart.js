import React from 'react'
import { useCart } from "react-use-cart";

import IconClose from '../Icons/IconClose'
import ProImg from '../../Assets/ProImages/image-1.png'
import Quantity from '../Quantity/Quantity'
import IconDelete from '../Icons/IconDelete'
import "./MyCart.css"

function MyCart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        inCart,
        emptyCart
    } = useCart();
    // if (isEmpty) return <h1 className="text-center">Cart Empty</h1>;
    return (
        <>
            <div className="cart_wrapper offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="row g-0">
                    <div className="col-12 col-lg-8">
                        <div className="cart_product_content">
                            <div className="cart_title">
                                <button type='button' data-bs-dismiss="offcanvas" aria-label="Close"><IconClose /> </button>
                                <h3>Your Cart</h3>
                                <h5>{totalUniqueItems} Items</h5>
                            </div>
                            <div className="cart_products">
                                <div className="all_cart_items">
                                    <div className="row title_row">
                                        <div className="col-1">
                                            <p className="caption bold">ITEM</p>
                                        </div>
                                        <div className="col-11  ">
                                            <div className="row">
                                                <div className="col-6"></div>
                                                <div className="col-2">QTY</div>
                                                <div className="col-2">PRICE</div>
                                                <div className="col-2"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        items.map((item, index) => {
                                            return (
                                                <div className="row item_row align-items-center g-0" key={index}>
                                                    <div className="col-3 col-lg-1">
                                                        <div className="pro_img">
                                                            <img src={item.image} alt="ProImg" />
                                                        </div>
                                                    </div>
                                                    <div className="col-9 col-lg-11  p_text_content ">
                                                        <div className="row g-0">
                                                            <div className="col-6 d-flex align-items-center ">
                                                                <h6 className="bold">{item.name}</h6>
                                                            </div>
                                                            <div className="col-6 col-lg-2 order-1">
                                                                <Quantity item={item} updateItemQuantity={updateItemQuantity} />
                                                            </div>
                                                            <div className="col-6 col-lg-2  d-flex align-items-center justify-content  order-1 pirce"><h5>$ {item.price}</h5></div>
                                                            <div className="col-6 col-lg-2  d-flex align-items-center order-sm-2 delete">
                                                                <button onClick={()=>{removeItem(item.id)}}><IconDelete /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pro_summery">
                        <div className="form_wrapper">
                            <form action="">
                                <div className="summary_content">
                                    <div className="summary_header">
                                        <div className="summary_title">
                                            <h4>Summary</h4>
                                        </div>
                                        <div className="sub_total">
                                            <h6 className="bold">SUb-Total</h6>
                                            <h6>$ 2,340.00</h6>
                                        </div>
                                    </div>
                                    <div className="sumary_footer">
                                        <div className="grand_total">
                                            <h6 className="bold">Grand Total</h6>
                                            <h4>$ 2,340.00</h4>
                                        </div>
                                        <button type='submit' className='btn_text btn_border w-100 head_less'>checkout</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MyCart