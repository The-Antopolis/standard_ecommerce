import React from 'react'
import Fav_Icon from '../../Assets/Icons/fav-heart.svg';

function FavButton() {
    return (
        <button className="fav_btn">
            <img src={Fav_Icon} alt="Fav_Icon" />
        </button>
    )
}

export default FavButton