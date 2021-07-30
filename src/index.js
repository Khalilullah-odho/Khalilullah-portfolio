import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "./index.css";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
