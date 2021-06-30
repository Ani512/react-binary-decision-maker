'use strict';
import React from 'react';

// This is a STATELESS react component
const Header = ( props ) =>
{
    return (
        <div className="header">
            <h1>{ props.title } </h1>
            { props.subtitle && <h3>{ props.subtitle }</h3> }
        </div> );
};

export default Header;