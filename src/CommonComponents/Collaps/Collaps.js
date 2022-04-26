// React Module Imports
import React, { useState } from 'react'
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from "@createnl/grouped-checkboxes";

// Import Image Icons
import ChaveronDown from '../Icons/ChaveronDown';
import ChaveronUp from '../Icons/ChaveronUp'

function Collaps() {
    const [show, setShow] = useState(false)
    const [AllCategorys, setAllCategorys] = useState(false);


    return (
        <>
            <CheckboxGroup>
                <div className=" product_collection" >
                    <div className="price_mm_content" onClick={() => setShow(!show)}>
                        <label className="chackbox_container allcategories">
                            <h6>Mens</h6>
                            <AllCheckerCheckbox
                                onClick={() => setAllCategorys(!AllCategorys)}
                                className="group"
                            />
                            <span className="checkmark "></span>
                        </label>

                        {show ? <ChaveronUp /> : <ChaveronDown />}
                    </div>
                    <div className={show ? "content_options" : "content_options hide"}>

                        <label className="chackbox_container">
                            Free Size
                            <Checkbox name="Free Size" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="chackbox_container">
                            Loose Fit Panjabi
                            <Checkbox name="Loose Fit Panjabi" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="chackbox_container">
                            Slim Fit Panjabi
                            <Checkbox name="Slim Fit Panjabi" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="chackbox_container">
                            Semi Fit Panjabi
                            <Checkbox name="Semi Fit Panjabi" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </CheckboxGroup>
        </>
    )
}

export default Collaps