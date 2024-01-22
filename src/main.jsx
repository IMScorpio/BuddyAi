import React from "react";
import { render } from "react-dom"; // Change import statement
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
