import { RouterProvider } from "react-router-dom";

import { routes } from "./util/routes";

const App = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default App;
