import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AppContainer from "./containers/AppContainer";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <AppContainer>
        <Dashboard />
      </AppContainer>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
