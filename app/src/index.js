import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BaseContextProvider } from "./context/BaseContext";

ReactDOM.render(
  <BaseContextProvider>
    <App />
  </BaseContextProvider>,
  document.getElementById("root")
);
