import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Client from "./client/Client";
import Vehicle from "./vehicle/Vehicle";
import TruckSides from "./truckSides/TruckSides";
import TruckPlatform from "./truckPlatform/TruckPlatform";
import CargoTieingSystem from "./cargoTieingSystem/CargoTieingSystems";
import { useDispatch, useSelector } from "react-redux";
import { FormState, Mode, actions as formActions } from "../formSlice";
import { actions as ordersActions } from "../../pageOrders/ordersSlice";
import "./Form.css";

function Form() {
  const tabs = ["Client", "Vehicle", "TruckPlatform", "Carga", "Basculante", "Laterais"];
  const dispatch = useDispatch();
  const formState = useSelector((state: any) => state.formReducer).value as FormState;

  if (!formState.Options.SelectedTab) {
    dispatch(formActions.SetSelectTab(tabs[0]));
  }

  function CloseForm(): void {
    dispatch(formActions.setIsOpen(false));
    dispatch(formActions.setInitialState());
  }

  function HandleAction(): void {
    switch (formState.Options.Mode) {
      case Mode.Create:
        return CreateOrder();
      case Mode.Edit:
        return SaveOrder();
      default:
        return EnableEdit();
    }
  }

  function GetAction(): string {
    switch (formState.Options.Mode) {
      case Mode.Create:
        return "Encomendar";
      case Mode.Edit:
        return "Guardar";
      default:
        return "Editar";
    }
  }

  function EnableEdit(): void {
    dispatch(formActions.setMode(Mode.Edit));
  }

  function SaveOrder(): void {
    // TODO ask user: are you sure you want to update this order?

    // TODO CHECK FORM VALIDATIONS

    // TODO REMOVE TMP PUSH TO ORDERS SLICES
    dispatch(ordersActions.updateOrder(formState.Order));

    CloseForm();
  }

  function CreateOrder(): void {
    // TODO ask user: are you sure you want to create this order?

    // TODO CHECK FORM VALIDATIONS

    // TODO REMOVE TMP PUSH TO ORDERS SLICES
    dispatch(ordersActions.addOrder(formState.Order));

    CloseForm();
  }

  function SetPreviousTab(): void {
    if (formState.Options.SelectedTab)
      dispatch(formActions.SetSelectTab(tabs[tabs.indexOf(formState.Options.SelectedTab) - 1]));
  }
  function SetNextTab(): void {
    if (formState.Options.SelectedTab)
      dispatch(formActions.SetSelectTab(tabs[tabs.indexOf(formState.Options.SelectedTab) + 1]));
  }

  return (
    <Modal centered fullscreen show={formState.Options.IsOpen} onHide={() => CloseForm()}>
      <Modal.Header closeButton>
        <Modal.Title>Configurador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          id="controlled-tab-form"
          activeKey={formState.Options.SelectedTab}
          onSelect={(k) => dispatch(formActions.SetSelectTab(k!))}
          className="mb-5"
        >
          <Tab eventKey={tabs[0]} title="Cliente" className="container">
            <Client />
          </Tab>
          <Tab eventKey={tabs[1]} title="Veiculo" className="container">
            <Vehicle />
          </Tab>
          <Tab eventKey={tabs[2]} title="Configuração de estrado" className="container">
            <TruckPlatform />
          </Tab>
          <Tab eventKey={tabs[3]} title="Sistemas de amarração de carga" className="container">
            <CargoTieingSystem />
          </Tab>
          {/* TODO */}
          <Tab eventKey={tabs[4]} title="Configuração especifica basculante" className="container"></Tab>
          <Tab eventKey={tabs[5]} title="Laterais" className="container">
            <TruckSides />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <div className="modalFooter">
          <p>PVP: {Math.round(Math.random() * 10000).toLocaleString()} Eur</p>
          <div>
            <Button
              className="footer-btn"
              onClick={() => SetPreviousTab()}
              disabled={formState.Options.SelectedTab == tabs[0]}
            >
              Anterior
            </Button>
            <Button className="footer-btn" onClick={() => CloseForm()}>
              Cancelar
            </Button>
            {formState.Options.SelectedTab != tabs[tabs.length - 1] || formState.Options.Mode === Mode.View ? (
              <Button
                className="footer-btn"
                onClick={() => SetNextTab()}
                disabled={formState.Options.SelectedTab == tabs[tabs.length - 1]}
              >
                Seguinte
              </Button>
            ) : null}
            {formState.Options.SelectedTab == tabs[tabs.length - 1] && formState.Options.Mode !== Mode.View ? (
              <Button className="footer-btn-order" variant="primary" onClick={() => HandleAction()}>
                {GetAction()}
              </Button>
            ) : null}
            {formState.Options.Mode === Mode.View ? (
              <Button className="footer-btn-order" variant="primary" onClick={() => HandleAction()}>
                {GetAction()}
              </Button>
            ) : null}
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Form;
