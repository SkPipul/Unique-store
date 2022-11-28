import React from 'react';

const ConfirmDeleteUser = ({ title, message, closeModal, data, deleteAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => deleteAction(data)} 
                        htmlFor="confirmation-modal" 
                        className="btn btn-error">Confirm</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteUser;