import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuLink.css'

function MenuLink({ pageLink, children }) {
    return (
        <>
            <NavLink to={pageLink} className='btn_menu btn_text'>{children}</NavLink>
        </>
    )
}

export default MenuLink