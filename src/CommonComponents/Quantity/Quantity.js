// React Module Imports
import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';

// Image Icons Import
import IconPlus from '../Icons/IconPlus';
import IconMinus from '../Icons/IconMinus';

// Quantity Style css Import
import './Quantity.css';

export default function Quantity({item, updateItemQuantity}) {

  // const {  updateItemQuantity } = useCart();
  // const [item, setItem] = useState('0')
  // useEffect(() => {
  //   items.map((data) => (setItem(data)))
  // })

  return <>
    <div className="quantity">
      <button className="increase"
        onClick={

          
          () =>

          
          updateItemQuantity(item.id, item.quantity - 1)
        }
      ><IconMinus /></button>
      <h5 className='m-0'>{item.quantity}</h5>
      <button className="decrease"
        onClick={() => {
          updateItemQuantity(item.id, item.quantity + 1);
        }}
      ><IconPlus /></button>
    </div>
  </>;
}
