import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./context/products";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Provider context introduce as parent element of App and all the related subclasses
root.render(
  <Provider>
    <App />
  </Provider>
);
