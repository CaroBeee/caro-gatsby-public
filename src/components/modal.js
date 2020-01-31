import React from "react"
import ReactDOM from "react-dom" 
import PropTypes from 'prop-types'; 

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null
  }

  

  return  ReactDOM.createPortal(
    <div id="modalOne" className="modal is-active">
      <div className="modal-background" onClick={closeModal} onKeyDown={closeModal} role= "button" tabIndex={0}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Projekt Info</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModal} onKeyDown={closeModal}
          ></button>
        </header>
        {children}
      
      </div>
    </div>,
    document.body
  );

 
  
}

 Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
  } 

export default Modal
