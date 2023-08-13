import { useState } from "react";
import Button from "../common/Button";
import Alert from "./Alert";
import ListGroup from "./ListGroup";

function TutorialComponent() {
  let items = ["Encomendar", "List de Encomendas"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  function onButtonClick(): void {
    console.log("Clicked");
    setAlertVisibility(true);
  }
  return (
    <>
      <ListGroup
        items={items}
        heading="Encomendas"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={onButtonClick}>My button</Button>
    </>
  );
}

export default TutorialComponent;
