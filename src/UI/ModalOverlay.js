import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./ModalOverlay.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const Modal = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
    </Fragment>
  );
};

export default ModalOverlay;
