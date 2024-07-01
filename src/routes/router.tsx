import { createBrowserRouter } from "react-router-dom";
import { ROUTES_ENUM } from "./routes.enum";
import { Kanban } from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: ROUTES_ENUM.ROOT,
    element: <MainLayout />,
    children: [{ path: ROUTES_ENUM.ROOT, element: <Kanban /> }],
  },
]);

export default router;
