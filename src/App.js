// React Module Imports
import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import { CartProvider } from "react-use-cart";
import Navbar from './AllPagesComponents/Navbar/Navbar';
import SearchBar from './AllPagesComponents/SearchBar/SearchBar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ViewShop from './Pages/ViewShop/ViewShop';

// APP CSS IMPORT
import './App.css';
import Login from './Pages/Auth/Login';
import AddressSelected from './Pages/Checkout/AddressSelected';
import EditSelectedAddress from './Pages/Checkout/EditSelectedAddress';
import SingUp from './Pages/Auth/SingUp';
import RecoverPassOne from './Pages/Auth/RecoverPassOne';
import RecoverPassThree from './Pages/Auth/RecoverPassThree';
import RecoverPassTwo from './Pages/Auth/RecoverPassTwo';
import AddNewAddress from './Pages/Checkout/AddNewAddress';
import EditInfo from './Pages/Checkout/EditInfo';
import ProfileInfo from './Pages/MyProfile/ProfileInfo';
import ChangePassword from './Pages/MyProfile/ChangePassword';
import EditNewDeliveryAddress from './Pages/MyProfile/EditNewDeliveryAddress';
import AddNewDeliveryAddress from './Pages/MyProfile/AddNewDeliveryAddress';
import MyCart from './CommonComponents/MyCart/MyCart';
import Home from './Pages/Home/Home';


function App() {
  //search toggle
  const [searchActive, setSearchActive] = useState('');
  const searchToggle = () => {
    setSearchActive('active')
  }
  return (
    <>
      <CartProvider>
        <Navbar searchToggle={searchToggle} />
        <SearchBar searchActive={searchActive} setSearchActive={setSearchActive} />
        <MyCart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-shop" element={<ViewShop />} />
          <Route path="/product-details/:product_id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/recover-pass-one" element={<RecoverPassOne />} />
          <Route path="/recover-pass-two" element={<RecoverPassTwo />} />
          <Route path="/recover-pass-three" element={<RecoverPassThree />} />
          <Route path="/address-selected" element={<AddressSelected />} />
          <Route path="/edit-address-selected" element={<EditSelectedAddress />} />
          <Route path="/add-new-address" element={<AddNewAddress />} />
          <Route path="/edit-info" element={<EditInfo />} />
          <Route path="/profile-info" element={<ProfileInfo />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/edit-new-address" element={<EditNewDeliveryAddress />} />
          <Route path="/add-new-delivery-address" element={<AddNewDeliveryAddress />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
