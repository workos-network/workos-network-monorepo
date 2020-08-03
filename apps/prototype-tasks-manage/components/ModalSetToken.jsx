import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { Box } from "theme-ui";
import FormSetToken from "./FormSetToken";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
  },
};

const ModalSetToken = ({ children, ...props }) => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen width={500} style={customStyles} ariaHideApp={false}>
      <Box sx={{ width: 500 }}>
        <p>Settings</p>
        <FormSetToken />
        <Box sx={{ position: "absolute", top: -10, right: -10 }}>
          <button onClick={hideModal}>CLOSE</button>
        </Box>
      </Box>
    </ReactModal>
  ));

  return <span onClick={showModal}>{children}</span>;
};

export default ModalSetToken;
