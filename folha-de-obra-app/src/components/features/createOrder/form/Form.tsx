import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Client from "./client/Client";
import Vehicle from "./vehicle/Vehicle";
import Sides from "./sides/Sides";
import TruckPlatform from "./truckPlatform/TruckPlatform";
import CargoTieingSystem from "./cargoTieingSystem/CargoTieingSystems";
import { useDispatch, useSelector } from "react-redux";
import { FormState, actions as formActions } from "../formSlice";
import { actions as ordersActions } from "../../pageOrders/ordersSlice";

function Form() {
  const [key, setKey] = useState("Client");
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer)
    .value as FormState;

  function CloseForm(): void {
    dispatch(formActions.setIsOpen(false));
    dispatch(formActions.setInitialState());
  }

  function SubmitForm(): void {
    // TODO CHECK FORM VALIDATIONS

    // TODO REMOVE TMP PUSH TO ORDERS SLICES
    dispatch(ordersActions.addOrder(formState.Order));

    CloseForm();
  }

  return (
    <Modal
      centered
      fullscreen
      show={formState.Options.IsOpen}
      onHide={() => CloseForm()}
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
        <Button variant="secondary" onClick={() => CloseForm()}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => SubmitForm()}>
          Encomendar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Form;
