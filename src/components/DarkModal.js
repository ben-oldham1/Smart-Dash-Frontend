import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent(props) {
  const onClickHandler = () => {
    props.onClose();
  };

  return (
    <Modal size={props.size} show={true} onHide={props.onClose}>
      <Modal.Header className='bg-secondary text-light border-dark'>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-secondary text-light border-dark'>
        {props.children}
      </Modal.Body>
      <Modal.Footer className='bg-secondary text-light border-dark'>
        <Button variant="dark" onClick={onClickHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={onClickHandler}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
