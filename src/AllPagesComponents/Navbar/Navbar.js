import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChaveronDown from '../../CommonComponents/Icons/ChaveronDown'
import IconCart from '../../CommonComponents/Icons/IconCart'
import IconSearch from '../../CommonComponents/Icons/IconSearch'
import IconUser from '../../CommonComponents/Icons/IconUser'
import IconMenu from '../../CommonComponents/Icons/IconMenu'
import Logo from '../../CommonComponents/Logo/Logo'
import MenuLink from '../../CommonComponents/MenuLink/MenuLink'
// import MegaMenu from '../MegaMenu/MegaMenu'

import './Navbar.css'
import SmallNavbarManu from '../SmallNavbarManu/SmallNavbarManu'
import UserProfileImage from '../../Assets/UserIcon/UserProfileImage.png'
import ChaveronUp from '../../CommonComponents/Icons/ChaveronUp'

function Navbar({ searchToggle }) {

    // const cat = useRef();
    const [active, setActive] = useState('');
    const [toggle, settoggle] = useState(false);
    const handleEnter = () => {
        setActive('active');
    }
    console.log(active)
    return (
        <>
            <nav className='navbar'>
                <div className="container-fluid px-0">
                    <div className="logo_menu_wrapper">
                        <div className="menu_toggler">
                            <button data-bs-toggle="offcanvas" data-bs-target="#SideNavbar" aria-controls="SideNavbar">
                                <IconMenu />
                            </button>
                        </div>
                        <div className="logo" style={{display: 'none'}}>
                            <Logo />
                        </div>
                        <div className="menu_large">
                            <ul>
                                <li>
                                    <MenuLink pageLink='/view-shop'>view shop</MenuLink>
                                </li>
                                <li>
                                    <MenuLink pageLink='/men'>
                                        men
                                        <ChaveronDown />
                                    </MenuLink>
                                </li>
                                <li>
                                    <MenuLink pageLink='/women'>
                                        women
                                        <ChaveronDown />
                                    </MenuLink>
                                </li>
                                <li onMouseEnter={handleEnter}>
                                    <MenuLink pageLink='/spring-collecion' data-target='#category3'>
                                        spring collecion
                                        <ChaveronDown />
                                    </MenuLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="controls_wrapper">
                        <button onClick={searchToggle}>
                            <IconSearch />
                        </button>
                        <button type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <IconCart />
                        </button>
                        <Link to='/login'>
                            <IconUser />
                        </Link>
                    </div>
                </div>
            </nav>
            {/* <div className="mega_menu_wrapper">
                <div id='men'></div>
                <div id='women'></div>
                <div className={`${active}`} id='#category3' onMouseEnter={handleEnter}>
                    <MegaMenu />
                </div>
            </div> */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="SideNavbar" aria-labelledby="SideNavbarLabel">
                <div className="offcanvas-header">
                    <div className="logo">
                        <Logo />
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="searchbar_wrapper">
                        <div className={`search_bar active`}>
                            <IconSearch />
                            <input type="text" placeholder='Search Here....' />
                        </div>
                    </div>
                    <div className="Manu_list">
                        <SmallNavbarManu id='1' />
                        <SmallNavbarManu Id='2' />
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <div className="login_btn d-none">
                        <button type='submit' className='btn_text btn_border w-100 head_less'>log in to your account</button>
                    </div> 
                    <div className="manus">
                        <div className="manu_heading">
                            <div className="user_content">
                                <div className="user_icon">
                                    <img src={UserProfileImage} alt="UserProfileImage" />
                                </div>
                                <h5>Hi Sheehan!</h5>
                            </div>
                            <button className="plus_btn" type="button" data-bs-toggle="collapse" data-bs-target={`#UserContent`} aria-expanded="false" aria-controls={`UserContent`} onClick={()=>settoggle( !toggle)}>
                            {toggle? <ChaveronUp/> : <ChaveronDown /> }
                            </button>
                        </div>
                        <div className="collapse" id={`UserContent`}>
                            <div className="sub_category">
                                <MenuLink pageLink='/my-profile'>my profile</MenuLink>
                                <MenuLink pageLink='/my-wishlist'>my wishlist</MenuLink>
                                <MenuLink pageLink='/My-orders'>My orders</MenuLink>
                                <MenuLink pageLink='/Sign out'>Sign out</MenuLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar