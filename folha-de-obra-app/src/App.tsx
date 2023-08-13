import Form from "./components/form/Form";
import TutorialComponent from "./components/tutorial/TutorialComponent";
import { useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(true);

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          onClick={() => setShowApp(true)}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          App
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          onClick={() => setShowApp(false)}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Tutorial
        </label>
      </div>
      <div>{showApp ? <Form /> : <TutorialComponent />}</div>
    </>
  );
}

export default App;
