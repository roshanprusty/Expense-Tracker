import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./Context/Context";

ReactDOM.render(
  <SpeechProvider appId="a6496470-11bf-4fd4-b130-2300a36fdd88" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
