import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

export default ({ isOpen, toggle, header, onSave, children, saveText }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {header ? <ModalHeader toggle={toggle}>{header}</ModalHeader> : ""}
      <ModalBody>
      {children}
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={e => {
            if (onSave) onSave(e);
            toggle();
          }}
        >
          {saveText || "Save"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
