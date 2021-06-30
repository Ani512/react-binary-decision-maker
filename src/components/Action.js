'use strict';
import React from 'react';

// STATELESS
const Action = ( props ) =>
{
    return (
        <div>
            {
                props.hasOptions ?
                    ( <div className="action-q">
                        <button className="btn" onClick={ props.handlePick }>What Should I do ?</button>
                    </div> )
                    : <p></p>
            }
            {
                props.answer ?
                    ( <div className="action-a">
                        <p>Option: <span>{ props.answer }</span></p>
                    </div> )
                    : <p></p>
            }
        </div> );
};

export default Action;