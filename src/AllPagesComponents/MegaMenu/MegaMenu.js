import React from 'react'
import { Link } from 'react-router-dom'
import RightArrow from '../../CommonComponents/Icons/RightArrow'
import MenuLink from '../../CommonComponents/MenuLink/MenuLink'

import './MegaMenu.css'

function MegaMenu() {
  return (
    <div className='mega_menu'>
      <div className="title_wrapper">
        <h3>Spring Collection</h3>
        <Link to='/men' className='btn_view_all btn_text'>
          view all
          <RightArrow />
        </Link>
      </div>
      <div className="category_wrapper">
        <div className="row g-0">
          <div className="col-9">
            <div className="row row-cols-5 g-0">
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/men' className='category_link'>Men</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/panjabi'>Panjabi</MenuLink>
                    <MenuLink pageLink='/shirt'>shirt</MenuLink>
                    <MenuLink pageLink='/t-shirt'>t-shirt</MenuLink>
                    <MenuLink pageLink='/chino-pants'>chino pants</MenuLink>
                  </div>
                  <div className="all_sub_category">
                    <Link to='/men' className='btn_view_all btn_text'>
                      view all
                      <RightArrow />
                    </Link>
                    <div className="box">
                      <span className='caption_bold'>+3</span>
                      <div className="hover_box">
                        <div className="inner_box">
                          <p className='caption'>Polo T-shirt</p>
                          <p className='caption'>Formal pant</p>
                          <p className='caption'>Jackets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/women' className='category_link'>Women</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/three-piece'>three piece</MenuLink>
                    <MenuLink pageLink='/lehenga'>lehenga</MenuLink>
                    <MenuLink pageLink='/saree'>saree</MenuLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/men' className='category_link'>Men</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/panjabi'>Panjabi</MenuLink>
                    <MenuLink pageLink='/shirt'>shirt</MenuLink>
                    <MenuLink pageLink='/t-shirt'>t-shirt</MenuLink>
                    <MenuLink pageLink='/chino-pants'>chino pants</MenuLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/women' className='category_link'>Women</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/three-piece'>three piece</MenuLink>
                    <MenuLink pageLink='/lehenga'>lehenga</MenuLink>
                    <MenuLink pageLink='/saree'>saree</MenuLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/men' className='category_link'>Men</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/panjabi'>Panjabi</MenuLink>
                    <MenuLink pageLink='/shirt'>shirt</MenuLink>
                    <MenuLink pageLink='/t-shirt'>t-shirt</MenuLink>
                    <MenuLink pageLink='/chino-pants'>chino pants</MenuLink>
                  </div>
                  <div className="all_sub_category">
                    <Link to='/men' className='btn_view_all btn_text'>
                      view all
                      <RightArrow />
                    </Link>
                    <div className="box">
                      <span className='caption_bold'>+3</span>
                      <div className="hover_box">
                        <div className="inner_box">
                          <p className='caption'>Polo T-shirt</p>
                          <p className='caption'>Formal pant</p>
                          <p className='caption'>Jackets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/women' className='category_link'>Women</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/three-piece'>three piece</MenuLink>
                    <MenuLink pageLink='/lehenga'>lehenga</MenuLink>
                    <MenuLink pageLink='/saree'>saree</MenuLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories">
                  <h6 className="bold_cap">
                    <Link to='/men' className='category_link'>Men</Link>
                  </h6>
                  <div className="sub_category">
                    <MenuLink pageLink='/panjabi'>Panjabi</MenuLink>
                    <MenuLink pageLink='/shirt'>shirt</MenuLink>
                    <MenuLink pageLink='/t-shirt'>t-shirt</MenuLink>
                    <MenuLink pageLink='/chino-pants'>chino pants</MenuLink>
                  </div>
                  <div className="all_sub_category">
                    <Link to='/men' className='btn_view_all btn_text'>
                      view all
                      <RightArrow />
                    </Link>
                    <div className="box">
                      <span className='caption_bold'>+3</span>
                      <div className="hover_box">
                        <div className="inner_box">
                          <p className='caption'>Polo T-shirt</p>
                          <p className='caption'>Formal pant</p>
                          <p className='caption'>Jackets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="categories">
              <h6 className="bold_cap">
                <Link to='/more-categories' className='category_link'>More Categories</Link>
              </h6>
              <div className="sub_category">
                <MenuLink pageLink='/three-piece'>three piece</MenuLink>
                <MenuLink pageLink='/lehenga'>lehenga</MenuLink>
                <MenuLink pageLink='/saree'>saree</MenuLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaMenu