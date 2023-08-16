import { Button, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Client from "./client/Client";
import Vehicle from "./vehicle/Vehicle";
import Sides from "./sides/Sides";
import TruckPlatform from "./truckPlatform/TruckPlatform";
import CargoTieingSystem from "./cargoTieingSystem/CargoTieingSystems";
import Modal from "react-bootstrap/Modal";
import { actions, Options } from "../../createOrder/formSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const [key, setKey] = useState("Client");
  const dispatch = useDispatch();

  const formState = useSelector((state: any) => state.formReducer).value
    .Options as Options;

  return (
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
        <Tabs
          id="controlled-tab-form"
          activeKey={key}
          onSelect={(k) => setKey(k!)}
          className="mb-3"
        >
          <Tab eventKey="Client" title="Cliente">
            <Client />
          </Tab>
          <Tab eventKey="Vehicle" title="Veiculo">
            <Vehicle />
          </Tab>
          <Tab eventKey="TruckPlatform" title="Configuração de estrado">
            <TruckPlatform />
          </Tab>
          <Tab eventKey="Carga" title="Sistemas de amarração de carga">
            <CargoTieingSystem />
          </Tab>
          {/* TODO */}
          <Tab
            eventKey="Basculante"
            title="Configuração especifica basculante"
          ></Tab>
          <Tab eventKey="Laterais" title="Laterais">
            <Sides />
          </Tab>
        </Tabs>
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
  );
}

export default Form;
