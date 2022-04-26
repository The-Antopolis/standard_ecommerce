// React Module Imports
import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";

// SidebarSorting Style css Import
import './SidebarSorting.css'


// Import Image Icons
import Collaps from '../Collaps/Collaps';
import IconClose from '../Icons/IconClose';

function SideBarSorting({ SideNavebar, show_SideNavebar }) {
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(100);



    const [onChangedata, setOnChange] = useState([]);
    // console.log(onChangedata)

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <><div
            className={SideNavebar ? "backShadow show" : "backShadow"}
            onClick={() => show_SideNavebar(!SideNavebar)}
        ></div>
            <div className="side_navbar">
                <div className="side_navbar_title">
                    <h4>Filters</h4>
                    <button className='btn_text clear_btn'>Clear All <IconClose /></button>
                </div>

                <div className={SideNavebar ? "side_navbar_content show" : "side_navbar_content"}>
                    <div className="product_sort_content" >
                        {/* <CheckboxGroup onChange={setOnChange}> */}
                        <h5 className="bold">Collections</h5>
                        <CheckboxGroup onChange={setOnChange}>
                            <label className="chackbox_container"> Select All
                                <AllCheckerCheckbox className="group" />
                                <span className="checkmark classes"></span>
                            </label>
                            <label className="chackbox_container"> Men
                                <Checkbox name="Class" />
                                <span className="checkmark classes"></span>
                            </label>
                            <label className="chackbox_container"> Women
                                <Checkbox name="Class" />
                                <span className="checkmark classes"></span>
                            </label>
                            <label className="chackbox_container"> Spring Collection
                                <Checkbox name="Class" />
                                <span className="checkmark classes"></span>
                            </label>
                        </CheckboxGroup>
                    </div>
                    <div className="product_sort_content">
                        <div className=" pricing">
                            <div className="price_content">
                                <h5 className='bold'>Price</h5>
                            </div>
                            <MultiRangeSlider
                                min={useState(0)}
                                max={useState(100)}
                                step={5}
                                ruler={true}
                                label={true}
                                preventWheel={false}
                                minValue={minValue}
                                maxValue={maxValue}
                                onInput={(e) => {
                                    handleInput(e);
                                }}
                            />
                            <div className="min_max">
                                <div className="min">
                                    <p className="caption bold m-0">
                                        MIN
                                    </p>
                                    <p className="body_text">$ {minValue}</p>
                                </div>
                                <div className="max">
                                    <p className="caption bold m-0">
                                        MAX
                                    </p>
                                    <p className="body_text">$ {maxValue}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="bold product_collection_title">Spring Collection</h5>
                    <div className="all_categories">
                        <Collaps />
                        <Collaps />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarSorting