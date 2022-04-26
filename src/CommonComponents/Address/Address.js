// React Module Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Address Data
import AddressData from "../../Assets/LocakData/AddressData.json"
import IconAddNew from '../Icons/IconAddNew';
import IconEdit from '../Icons/IconEdit';
import IconHome from '../Icons/IconHome';

export default function Address() {
    const [defaultAddress, setDefaultAddress] = useState({
        default: AddressData[0].address_Id,
        addresses: AddressData.map((e) => e.address_Id)
    })
    function toggle(index) {
        setDefaultAddress({ ...defaultAddress, default: defaultAddress.addresses[index] })
    }

    function toggleDEfault(index) {
        if (defaultAddress.addresses[index] === defaultAddress.default) {
            return "default_info default"
        } else {
            return "default_info"
        }
    }

    return <>

        {
            AddressData.map((e, index) => {
                return (
                    <div className="col-12 col-lg-4" key={index} onClick={() => { toggle(index) }}>
                        <div className={toggleDEfault(index)}>
                            <div className="edit_btn">
                                <div className="d-flex align-items-center">
                                    <IconHome />
                                    <p className='caption ps-2'>Home</p>
                                </div>
                                <div className="">
                                    <Link className='btn_text' to='/edit-info'><IconEdit /></Link>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-6">
                                    <div className="info_content">
                                        <p className='caption bold'> Division</p>
                                        <p className="body_text"> Dhaka </p>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="info_content">
                                        <p className='caption bold'> District</p>
                                        <p className="body_text"> Dhaka</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-6">
                                    <div className="info_content">
                                        <p className='caption bold'> area</p>
                                        <p className="body_text"> Gulshan </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="info_content">
                                        <p className='caption bold'> Zip code</p>
                                        <p className="body_text"> 1401 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="info_content">
                                        <p className='caption bold'> Full address</p>
                                        <p className="body_text"> House-54, Road-8, Niketan, Gulshan, Dhaka  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="caption bold text-center da_text">{toggleDEfault(index) === "default_info default" ? "Default Address" : "set Default Address" }</p>
                    </div>
                )

            })
        }
        <div className="col-12 col-lg-4">
            <div className="address_add">
                <Link to="/add-new-delivery-address" >
                    <IconAddNew />
                    <p className='btn_text'>add new address</p>
                </Link>
            </div>
        </div>



    </>;
}
