import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";

// replace console.* for disable log on production
console.log(import.meta.env.MODE);
if (import.meta.env.MODE === 'production') {
  console.log = () => {}
  console.debug = () => {}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
