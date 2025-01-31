import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ComplexCounter from "./components/ComplexCounter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="mt-10">
      <ComplexCounter></ComplexCounter>
    </div>
  </StrictMode>
);
