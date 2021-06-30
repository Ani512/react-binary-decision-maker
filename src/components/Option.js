'use strict';
import React from 'react';

// STATELESS
const Option = ( props ) =>
{
    return (
        <div className="single-option">
            <p className="inner">{ props.optionText }</p>
            <button className="btn-inner" onClick={ () =>
            {
                props.handleDeleteSingleOption( props.optionText );
            } }>X</button>
        </div>
    );
};

export default Option;