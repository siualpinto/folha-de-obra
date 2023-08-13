import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import Client from "./client/Client";
import Vehicle from "./vehicle/Vehicle";

function Form() {
  const [key, setKey] = useState("client");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k!)}
      className="mb-3"
    >
      <Tab eventKey="client" title="Cliente">
        <Client />
      </Tab>
      <Tab eventKey="vehicle" title="Veiculo">
        <Vehicle />
      </Tab>
      {/* TODO */}
      <Tab eventKey="s" title="Configuração de estrado"></Tab>
      <Tab eventKey="s2" title="Sistemas de armação de carga"></Tab>
      <Tab eventKey="s2" title="Configuração especifica basculante"></Tab>
    </Tabs>
  );
}

export default Form;
