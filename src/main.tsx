import ReactDOM from "react-dom/client";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
