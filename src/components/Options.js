'use strict';
import React from 'react';
import Option from './Option';

// STATELESS
const Options = ( props ) =>
{
    return (
        <div className="options">
            { props.hasOptions ?
                <button className="btn" onClick={ props.handleDeleteOptions }>Remove All Options</button>
                : <p></p>
            }
            {
                /*  Calling the Option Component with each option */
                props.options && props.options.length > 0 ? (
                    <div className="sen">
                        <p>Here are the Options - </p>
                        { props.options.map( option => (
                            <Option
                                key={ option }
                                optionText={ option }
                                handleDeleteSingleOption={ props.handleDeleteSingleOption }
                            /> ) ) }
                    </div>
                ) : <p className="info">Add Options to Begin</p>
            }
        </div>
    );
};// NOT Written as Arrow function so return statement needed 

export default Options;