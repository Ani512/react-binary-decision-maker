import React from 'react';
import Modal from 'react-modal';

const AnswerModal = ( props ) =>
(
    <Modal
        className="modal-dialog"
        isOpen={ props.ans ? true : false }
        onRequestClose={ props.closeModal }
        ariaHideApp={ false }
        contentLabel="AnswerModal">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Decision</h4>
            </div>
            <div className="modal-body">
                <h1>{ props.ans }</h1>
            </div>
            <div className="modal-footer">
                <button onClick={ props.closeModal } className="btn btn-modal">Close</button>
            </div>
        </div>
    </Modal>
); // Written as Arrow function so return statement not needed 

export default AnswerModal;