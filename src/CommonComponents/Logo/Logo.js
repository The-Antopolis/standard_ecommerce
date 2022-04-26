import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../Assets/Logo/logo.svg';

function Logo() {
    return (
        <>
            <Link to='/'>
                <img src={LogoImg} alt="logo" />
            </Link>
        </>
    )
}

export default Logo