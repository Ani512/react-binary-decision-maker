'use strict';
import React from 'react';
import AnswerModal from './AnswerModal';

// STATELESS
const Action = ( props ) =>
(
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
                    <AnswerModal ans={ props.answer } closeModal={ props.closeModal } />
                </div> )
                : <p></p>
        }
    </div>
);  // Written as Arrow function so return statement not needed 

export default Action;