import React from 'react'
import IconSearch from '../../CommonComponents/Icons/IconSearch'
import IconClose from '../../CommonComponents/Icons/IconClose'

import './SearchBar.css'

function SearchBar({ searchActive, setSearchActive }) {
  const searchClose = () => {
    setSearchActive('');
  }
  return (
    <>
      <div className={`search_bar_bg ${searchActive}`}></div>
      <div className={`search_bar ${searchActive}`}>
        <IconSearch />
        <input type="text" placeholder='Search Here....' />
        <button type='button' id="searchClose" className='close' onClick={searchClose}>
          <IconClose />
        </button>
      </div>
      <div className={`search_bar_suggest ${searchActive}`}>
        <p className='body_text'>XYZ</p>
        <p className='body_text'>XYZ</p>
      </div>
    </>
  )
}

export default SearchBar