import React from "react";
import { createRoot } from "react-dom/client";
import { Semaforo } from "./components/semaforo";

import "./css/style.css";

const root = createRoot(document.querySelector("#root"));
root.render(<Semaforo />);
