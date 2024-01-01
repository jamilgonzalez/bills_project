import { Grid, Typography } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/dashboard",

    element: <Dashboard />,
    errorElement: (
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        style={{ margin: "auto", height: "inherit" }}>
        <Grid item xs={3} style={{ textAlign: "center" }}>
          <Typography variant="h3">Page Not Found 😔</Typography>
        </Grid>
      </Grid>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
