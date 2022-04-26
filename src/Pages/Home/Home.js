import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper";
import Banner from '../../Assets/ProImages/banner.png';
import ProductCard from '../../CommonComponents/ProductCard/ProductCard'
import CategoryImage1 from '../../Assets/CategoryImg/CategoryImage1.png'
import CategoryImage2 from '../../Assets/CategoryImg/CategoryImage2.png'
import CategoryImage3 from '../../Assets/CategoryImg/CategoryImage3.png'
import CategoryImage4 from '../../Assets/CategoryImg/CategoryImage4.png'
import User from '../../Assets/CategoryImg/user.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import './Home.css'
import IconCote from '../../CommonComponents/Icons/IconCote';


function Home() {

    //for product item
    const [items, setItems] = useState([]);
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
            <section className='banner_wrapper'>
                <div className="home_slider">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide >
                            <img className='bannner_img' src={Banner} alt="ImgIcon" />
                            <div className="header_title d-flex flex-column ">
                                <h2>Take Basics To A Whole New Level</h2>
                                <p className="body_text">Functional, high-quality, practical, beautiful, versatile, wearable, tailored, understated, chic, and totally effortless.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='bannner_img' src={Banner} alt="ImgIcon" />
                            <div className="header_title d-flex flex-column ">
                                <h2>Take Basics To A Whole New Level</h2>
                                <p className="body_text">Functional, high-quality, practical, beautiful, versatile, wearable, tailored, understated, chic, and totally effortless.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='bannner_img' src={Banner} alt="ImgIcon" />
                            <div className="header_title d-flex flex-column ">
                                <h2>Take Basics To A Whole New Level</h2>
                                <p className="body_text">Functional, high-quality, practical, beautiful, versatile, wearable, tailored, understated, chic, and totally effortless.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='featured_products_wrapper multi_content_slider'>
                <div className="container">
                    <h2 className='section_title'>Featured Products</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        scrollbar={{
                            hide: false,
                        }}
                        breakpoints= {{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 3,
                              spaceBetween: 20
                            },
                            990: {
                                slidesPerView: 4,
                                spaceBetween: 20
                              }
                          }}
                        modules={[Scrollbar, Navigation]}
                        className="mySwiper"
                    >
                        {/* {
                            FakeData.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard item={data} />
                                </SwiperSlide>
                            ))
                        } */}

                        {items.status === true ? (
                            items.data.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard item={data} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>no data found</p>
                        )}

                        {/* <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide> */}
                    </Swiper>
                </div>
            </section>
            <section className='top_categorys_wrapper'>
                <div className="container">
                    <h2 className='section_title'>Top Categories</h2>
                    <div className="row row-cols-lg-4 row-cols-2 row-cols-sm-2 g-0 tc_row">
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage1} alt='CategoryImage1' />
                                </div>
                                <h4>Jackets</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage2} alt='CategoryImage1' />
                                </div>
                                <h4>Shirts</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage3} alt='CategoryImage1' />
                                </div>
                                <h4>T-shirts</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage4} alt='CategoryImage1' />
                                </div>
                                <h4>Jackets</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage2} alt='CategoryImage1' />
                                </div>
                                <h4>T-shirts</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage4} alt='CategoryImage1' />
                                </div>
                                <h4>Jackets</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage1} alt='CategoryImage1' />
                                </div>
                                <h4>Shirts</h4>
                            </div>

                        </div>
                        <div className="col">
                            <div className="category_content">
                                <div className="img_wrapper">
                                    <img src={CategoryImage2} alt='CategoryImage1' />
                                </div>
                                <h4>Blazers</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='featured_products_wrapper multi_content_slider'>
                <div className="container">
                    <h2 className='section_title'>Latest Products</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        breakpoints= {{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 3,
                              spaceBetween: 20
                            },
                            990: {
                                slidesPerView: 4,
                                spaceBetween: 20
                              }
                          }}
                        scrollbar={{
                            hide: false,
                        }}
                        modules={[Scrollbar, Navigation]}
                        className="mySwiper"
                        
                    >
                        {/* {
                            FakeData.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard item={data} />
                                </SwiperSlide>
                            ))
                        } */}
                        {items.status === true ? (
                            items.data.map((data, index) => (
                                <SwiperSlide  key={index}>
                                    <ProductCard item={data} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>no data found</p>
                        )}
                        {/* <SwiperSlide><ProductCard /> </SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide>
                        <SwiperSlide><ProductCard /></SwiperSlide> */}
                    </Swiper>
                </div>
            </section>
            <section className='testimonials_wrapper multi_content_slider'>
                <div className="container">
                    <h2 className='section_title'>Testimonials</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={true}
                        scrollbar={{
                            hide: false,
                        }}
                        breakpoints= {{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20
                            },
                            990: {
                                slidesPerView: 3,
                                spaceBetween: 20
                              }
                          }}
                        modules={[Scrollbar, Navigation]}
                        className="mySwiper"
                       
                    >
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials_content">
                                <IconCote />
                                <p className="body_text">
                                    Style is about confidence. If you look at your favorite style icons, you’ll see that sometimes they can wear the simplest clothing ever, and it just looks different on them. Why? Because they wear it with confidence.
                                </p>
                                <div className="testimonials_user">
                                    <div className="user_img">
                                        <img src={User} alt="User" />
                                    </div>
                                    <div className="user_text">
                                        <h6>Sheehan Rahman</h6>
                                        <p className="status">CEO, 7TEEN</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Home