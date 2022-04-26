import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IconEdit from '../../CommonComponents/Icons/IconEdit'
import ProductCard from '../../CommonComponents/ProductCard/ProductCard'
import ProfileImg from '../../Assets/ProImages/UserProfileImage.png'
import './MyProfile.css'
import RightArrow from '../../CommonComponents/Icons/RightArrow'
import Address from '../../CommonComponents/Address/Address'

function ProfileInfo() {

    //for product item
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(() => {
        fetch(`${window.baseUrl}api/items`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error(res.status);
                }
            })
            .then((data) => setItems(data))
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <section className="my_profile_section pt-20 pb-120">
                <div className="container">
                    <form action="#">
                        <div className="upload-picture">
                            <div className="upload-picture-inner">
                                <label htmlFor="fileUpload">
                                    <img src={ProfileImg} alt="upload"
                                        id="uplodedImg" />
                                </label>
                                <h4>Sheehan Bhai</h4>
                            </div>
                        </div>
                    </form>
                    <div className="my_profile_body">
                        <div>
                            {/* <!-- Nav tabs --> */}
                            <ul className="nav nav-tabs justify-content-between" id="myTab" role="tablist">
                                <li role="presentation">
                                    <p className=" active" id="personal_info-tab" data-bs-toggle="tab"
                                        data-bs-target="#personal_info" type="button" role="tab" aria-controls="personal_info"
                                        aria-selected="true">profile info</p>
                                </li>
                                <li role="presentation">
                                    <p className="" id="address_info-tab" data-bs-toggle="tab" data-bs-target="#address_info"
                                        type="button" role="tab" aria-controls="address_info" aria-selected="false">my Addresses</p>
                                </li>
                                <li role="presentation">
                                    <p className="" id="order_info-tab" data-bs-toggle="tab" data-bs-target="#order_info"
                                        type="button" role="tab" aria-controls="order_info" aria-selected="false">my Orders</p>
                                </li>
                                <li role="presentation">
                                    <p className="" id="productCard-tab" data-bs-toggle="tab" data-bs-target="#productCard" type="button"
                                        role="tab" aria-controls="productCard" aria-selected="false">my Wishlist</p>
                                </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div className="tab-content">
                                <div className="tab-pane active personal_info" id="personal_info">
                                    <div className="default_info">
                                        <div className="edit_btn">
                                            <h4>Profile Info</h4>
                                            <div className="">
                                                <Link className='btn_text' to='/'>edit</Link>
                                                <IconEdit />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-lg-4">
                                                <div className="info_content">
                                                    <p className='caption bold'> First Name</p>
                                                    <p className="body_text"> Sheehan </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4 ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Name</p>
                                                    <p className="body_text"> Niloy Barua </p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-4 ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Email</p>
                                                    <p className="body_text"> sheehanvy@gmail.com </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-4">
                                                <div className="info_content">
                                                    <p className='caption bold'> Phone</p>
                                                    <p className="body_text"> 01234567890 </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4  ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Name</p>
                                                    <p className="body_text"> Niloy Barua </p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-lg-4  ">
                                                <div className="info_content">
                                                    <p className='caption bold'> Name</p>
                                                    <p className="body_text"> Niloy Barua </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_buttons">
                                        <Link to='/change-password' className='btn_text'>change password</Link>
                                        <Link to="/" className='btn_text'>log out</Link>
                                    </div>
                                </div>
                                <div className="tab-pane my_addresses" id="address_info">
                                    <div className="row g-0 my_address_row">
                                        <Address />
                                    </div>

                                </div>
                                <div className="tab-pane" id="order_info">
                                    <div className="ongoing">
                                        <p className="caption bold">Ongoing</p>
                                        <ul className="orders_lists">
                                            <li className="order_details">
                                                <div className="code_and_delevery">
                                                    <p className="order_code caption bold">Order ID: <span className='caption' role="button" data-bs-toggle="modal"
                                                        data-bs-target="#orderHistoryModal">#10102</span></p>
                                                    <div className="order_status">
                                                        <span className='caption bold'>Order status:</span>
                                                        <h3 className="order_sign caption bold panding">Pending</h3>
                                                    </div>
                                                    <button className='btn_text vd_btn'>View details <RightArrow /></button>
                                                </div>
                                                <div className="price_date">
                                                    <h6 className="order_price">29th March, 2022</h6>
                                                </div>
                                            </li>
                                            <li className="order_details">
                                                <div className="code_and_delevery">
                                                    <p className="order_code caption bold">Order ID: <span className='caption' role="button" data-bs-toggle="modal"
                                                        data-bs-target="#orderHistoryModal">#10102</span></p>
                                                    <div className="order_status">
                                                        <span className='caption caption bold'>Order status:</span>
                                                        <h3 className="order_sign caption bold panding">Pending</h3>
                                                    </div>
                                                    <button className='btn_text vd_btn'>View details <RightArrow /> </button>

                                                </div>
                                                <div className="price_date">
                                                    <h6 className="order_price">29th March, 2022</h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="completed">
                                        <p className="caption bold">Completed</p>
                                        <ul className="orders_lists">
                                            <li className="order_details">
                                                <div className="code_and_delevery">
                                                    <p className="order_code caption bold">Order ID: <span className='caption' role="button" data-bs-toggle="modal"
                                                        data-bs-target="#orderHistoryModal">#10102</span></p>
                                                    <div className="order_status">
                                                        <span className='caption bold'>Order status:</span>
                                                        <h3 className="order_sign caption bold panding">Pending</h3>
                                                    </div>
                                                    <button className='btn_text vd_btn'>View details <RightArrow /></button>
                                                </div>
                                                <div className="price_date">
                                                    <h6 className="order_price">29th March, 2022</h6>
                                                </div>
                                            </li>
                                            <li className="order_details">
                                                <div className="code_and_delevery">
                                                    <p className="order_code caption bold">Order ID: <span className='caption' role="button" data-bs-toggle="modal"
                                                        data-bs-target="#orderHistoryModal">#10102</span></p>
                                                    <div className="order_status">
                                                        <span className='caption caption bold'>Order status:</span>
                                                        <h3 className="order_sign caption bold panding">Pending</h3>
                                                    </div>
                                                    <button className='btn_text vd_btn'>View details <RightArrow /> </button>

                                                </div>
                                                <div className="price_date">
                                                    <h6 className="order_price">29th March, 2022</h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                                <div className="tab-pane wish_products" id="productCard">
                                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3  g-0">
                                        {items.status === true ? (
                                            items.data.map((data, index) => (
                                                <div key={index} className="col">
                                                    <ProductCard item={data} />
                                                </div>
                                            ))
                                        ) : (
                                            <p>no data found</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileInfo