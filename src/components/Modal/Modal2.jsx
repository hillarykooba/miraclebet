import * as React from "react";
import "./modal.css";

function Modal2({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-header">
        MIRACELBET
        <h2
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </h2>
      </div>
      <div className="modal-body">
        <h2>YOUR i-TICKET NUMBER </h2>
        <h2>WAS STORED</h2>
        <h5>
          To place this bet, report the number at the counter! iTicket is valid
          to 03:28!
        </h5>
      </div>
    </div>
  );
}
export default Modal2;
