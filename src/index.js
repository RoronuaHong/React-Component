import React from "react";
import { render } from "react-dom";
import App from "./containers/App";

import "./styles/scss/common/reset";

render(
    <App />,
    document.querySelector("#root")
);
