'use strict';
import React from 'react';

// This is a STATELESS react component
const Header = ( props ) =>
{
    return (
        <div className="header">
            <h1>{ props.title } </h1>
            <div className="sub-header">
                { props.subtitle && <h3>{ props.subtitle }</h3> }
                <p className="text-toggle">Light Mode</p>
                <label className="switch">
                    <input type="checkbox" onClick={ props.darkMode }></input>
                    <span className="slider round"></span>
                </label>
            </div>
        </div> );
}; // Not Written as Arrow function so return statement present

export default Header;