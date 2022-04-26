import React, { useEffect, useState } from 'react'

import FilterIcon from '../../CommonComponents/Icons/FilterIcon'
import ProductCard from '../../CommonComponents/ProductCard/ProductCard'
import SidebarSorting from '../../CommonComponents/ProductSorting/SidebarSorting'
import "./ViewShop.css"

function ViewShop() {
  const [SideNavebar, show_SideNavebar] = useState(false);

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${window.baseUrl}api/items`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((data) => setItems(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className='view_shop_section'>
        <div className="container">
          <div className="row">
            <div className={SideNavebar ? "products_side_bar show" : "products_side_bar"}>
              <SidebarSorting SideNavebar={SideNavebar} show_SideNavebar={show_SideNavebar} />
            </div>
            <div className="products_cards">
              <div className="row g-0">
                <div className="col-lg-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/">Spring Collectio</a></li>
                      <li className="breadcrumb-item"><a href="/">Panjabi</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Semi Fit Panjabi</li>
                    </ol>
                  </nav>
                  <div className="pc_title_sort">
                    <div className="pc_title">
                      <h2>Semi Fit Panjabi</h2>
                      <p className='body_text'>27 Items found</p>
                    </div>
                    <div className="pc_sort">
                      <div className="dropdown">
                        <button onClick={() => show_SideNavebar(!SideNavebar)} className='filter_btn'><FilterIcon />Filter</button>
                        <button className="btn dropdown-toggle body_text" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Sort by
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item body_text" href="/">larg</a></li>
                          <li><a className="dropdown-item body_text" href="/">medium </a></li>
                          <li><a className="dropdown-item body_text" href="/">Ssmall</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0 row-cols-1 row-cols-md-3 row-cols-sm-1 row-cols-lg-3 products_cards_wrapper">
                {items.status === true ? (
                  items.data.map((data, index) => (
                    <div className="col" key={index} >
                      <ProductCard item={data} />
                    </div>
                  ))
                ) : (
                  <p>no data found</p>
                )}
                
                {/* {
                  FakeData.map((data, index) => {
                    return (
                      <div className="col" key={index} >
                      <ProductCard item={data} />
                    </div>
                    )
                  })
                } */}

              
                {/* <div className="col">
                  <ProductCard />
                </div>
                <div className="col">
                  <ProductCard />
                </div>
                <div className="col">
                  <ProductCard />
                </div>
                <div className="col">
                  <ProductCard />
                </div>
                <div className="col">
                  <ProductCard />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ViewShop