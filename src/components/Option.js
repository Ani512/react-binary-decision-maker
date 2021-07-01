'use strict';
import React from 'react';

// STATELESS
const Option = ( props ) =>
(
    <div className="single-option">
        <p className="inner">{ props.optionText }</p>
        <button className="btn-inner" onClick={ () =>
        {
            props.handleDeleteSingleOption( props.optionText );
        } }>X</button>
    </div>
); // Written as Arrow function so return statement not needed 

export default Option;