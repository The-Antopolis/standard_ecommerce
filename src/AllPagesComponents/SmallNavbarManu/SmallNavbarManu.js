import React from 'react'
import { Link } from 'react-router-dom'
import IconPlus from '../../CommonComponents/Icons/IconPlus'
import MenuLink from '../../CommonComponents/MenuLink/MenuLink'

function SmallNavbarManu({Id}) {
    return (
        <>
            <div className="manus">
                <div className="manu_heading">
                    <h4 className="bold_cap">
                        <Link to='/women' className='category_link'>Women</Link>
                    </h4>
                    <button className="plus_btn" type="button" data-bs-toggle="collapse" data-bs-target={`#manuList${Id}`} aria-expanded="false" aria-controls={`manuList${Id}`}>
                        <IconPlus />
                    </button>
                </div>
                <div className="collapse" id={`manuList${Id}`}>
                    <div className="sub_category">
                        <MenuLink pageLink='/three-piece'>three piece</MenuLink>
                        <MenuLink pageLink='/lehenga'>lehenga</MenuLink>
                        <MenuLink pageLink='/saree'>saree</MenuLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallNavbarManu