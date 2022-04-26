// React Module Imports
import React from 'react';

import "./BlackButton.css"

export default function BlackButton(props)
{

  const {onClick}= props;
    return <>
      <button className="btn_text Common_btn w-100" onClick={onClick}>
          {props.children}
        </button>
    </>
}
