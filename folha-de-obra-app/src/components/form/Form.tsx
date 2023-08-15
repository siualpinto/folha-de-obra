import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Client from "./client/Client";
import Vehicle from "./vehicle/Vehicle";
import Sides from "./sides/Sides";
import TruckPlatform from "./truckPlatform/TruckPlatform";
import CargoTieingSystem from "./cargoTieingSystem/CargoTieingSystems";

function Form() {
  const [key, setKey] = useState("Client");
  
  return (
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
  );
}

export default Form;
