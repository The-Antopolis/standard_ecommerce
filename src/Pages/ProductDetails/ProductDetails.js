// React Module Imports
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

import Quantity from '../../CommonComponents/Quantity/Quantity'
import FavBtn from '../../CommonComponents/FavButton/FavButton'
import BlackButton from '../../CommonComponents/BlackButtons/BlackButton';


// Import Swiper Slider components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

// Import swiper and ProductDetails Style css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./ProductDetails.css"
import IconPlus from '../../CommonComponents/Icons/IconPlus';
import IconMinus from '../../CommonComponents/Icons/IconMinus';

function ProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { product_id } = useParams();
    const [singleItem, setSingleItem] = useState([]);
    useEffect(() => {
        fetch(`${window.baseUrl}api/items/${product_id}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error(res.status);
                }
            })
            .then((data) => setSingleItem(data.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const { items, addItem, updateItemQuantity } = useCart();
    
    useEffect(() => {
        items.map((data) => (setItem(data)))
    })

    const [item, setItem] = useState()
    console.log(item)

    return (
        <>
            <section className='product_details'>
                <div className="container">
                    <div className="row PD_contents g-0">
                        <div className="col-lg-6">
                            <div className="product_slider">
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff",
                                    }}
                                    spaceBetween={10}
                                    direction={"horizontal"}
                                    navigation={false}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    mousewheel={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                    className="mySwiper2"
                                    breakpoints={{

                                        575: {
                                            direction: "vertical",

                                        },
                                    }}

                                >

                                    {singleItem.assets ? (
                                        singleItem.assets.map((data, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={data.asset} alt="thumb" />
                                                </SwiperSlide>)
                                        })
                                    ) : (
                                        <p>no data found</p>
                                    )}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={13}
                                    slidesPerView={4}
                                    freeMode={true}
                                    direction={"vertical"}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"

                                >

                                    {singleItem.assets ? (
                                        singleItem.assets.map((data, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={data.asset} alt="thumb" />
                                                </SwiperSlide>
                                            );
                                        })
                                    ) : (
                                        <p>no data found</p>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-6 sm_pading">
                            <div className="PD_text_content">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item"><a href="/">Spring Collectio</a></li>
                                        <li className="breadcrumb-item"><a href="/">Panjabi</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Semi Fit Panjabi</li>
                                    </ol>
                                </nav>
                                <div className="product_name">
                                    <h3>{singleItem.name}</h3>
                                    <h5 className="path">{singleItem.category_or_sub_category !== 1 ? `${singleItem.category_name} , ${singleItem.sub_category_name}` : singleItem.category_name}</h5>
                                    <FavBtn />
                                </div>
                                <div className="product_price">
                                    <h4>{singleItem.price}</h4>
                                    <Quantity item={item} updateItemQuantity={updateItemQuantity} />
                                    {/* <div className="quantity">
                                        <button className="increase"
                                            onClick={() =>
                                                updateItemQuantity(item.id, item.quantity - 1)
                                            }
                                        ><IconMinus /></button>
                                        <h5 className='m-0'>{item.quantity}</h5>
                                        <button className="decrease"
                                            onClick={() => {
                                                updateItemQuantity(item.id, item.quantity + 1);
                                            }}
                                        ><IconPlus /></button>
                                    </div> */}
                                </div>
                                <div className="add_to">
                                    <BlackButton
                                        onClick={() => {
                                            addItem(singleItem);
                                        }}
                                    >ADD TO CART</BlackButton>
                                </div>
                                <p className="caption bold">Description</p>
                                <p className='body_text'>{singleItem.description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails