import "./header.css";
import { actions, Options } from "../../createOrder/formSlice";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "../../createOrder/form/Form";

function Header() {
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value
    .Options as Options;

  return (
    <header className="header">
      <div className="logo">
        <img
          src="favicon.ico"
          height="68"
          width="68"
          alt="Folha de Obra Logo"
        />
        <h1 className="title">Encomendas</h1>
      </div>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => dispatch(actions.setIsOpen(true))}
      >
        Configurador
      </Button>
      <Modal
        centered
        fullscreen
        show={formState.IsOpen}
        onHide={() => dispatch(actions.setIsOpen(false))}
      >
        <Modal.Header closeButton>
          <Modal.Title>Configurador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(actions.setIsOpen(false))}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(actions.setIsOpen(false))}
          >
            Encomendar
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
}

export default Header;
