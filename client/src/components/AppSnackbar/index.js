import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import {
  SnackbarContext,
  UpdateSnackbarContext,
} from "../../context/SnackbarContextProvider";

const AppSnackbar = () => {
  const { isOpen, severity, message } = useContext(SnackbarContext);
  const setSnackbarState = useContext(UpdateSnackbarContext);

  return isOpen ? (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={true}
      autoHideDuration={6000}
      onClose={() => setSnackbarState((prev) => ({ ...prev, isOpen: false }))}
      message={message}
    >
      <Alert
        onClose={() => setSnackbarState((prev) => ({ ...prev, isOpen: false }))}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  ) : (
    <></>
  );
};

export default AppSnackbar;
