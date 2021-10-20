import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "./contexts/auth0-context";
import App from "./App";

ReactDOM.render(
  <Auth0Provider>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
