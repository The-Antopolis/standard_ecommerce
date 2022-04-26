// React Module Imports
import React from 'react'
import { Link } from 'react-router-dom'
import FavButton from '../FavButton/FavButton';


import './ProductCard.css'
// import Product_1 from '../../Assets/ProImages/image-1.png';


function ProductCard({item}) {
   return (
      <>
         {/* <div className="pc_wrapper">
            <Link to={`/product-details/15`}>
               <div className="product_img">
                  <img src={Product_1} alt="Product_1" />
               </div>
            </Link>
            <FavButton />
            <div className="Product_card_content">
               <div className="product_title">
                  <h6 className='.bold'>fsdfdsfdfdsf</h6></div>
               <div className="product_price">
                  <h6>100</h6>
               </div>
            </div>
         </div> */}
         
         <div className="pc_wrapper">
            <Link to={`/product-details/${item.id}`}>
               <div className="product_img">
                  <img src={item.image} alt="Product_1" />
               </div>
            </Link>
            <FavButton />
            <div className="Product_card_content">
               <div className="product_title">
                  <h6 className='.bold'>{item.name}</h6></div>
               <div className="product_price">
                  <h6>{item.price}</h6>
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductCard