const { createContext, useState } = require("react");

const SnackbarContext = createContext(null);
const UpdateSnackbarContext = createContext(null);

const SnackbarContextProvider = ({ children }) => {
  const [snackbarState, setSnackbarState] = useState({
    isOpen: false,
    severity: "success", // success | info | warning | error
    message: "",
  });

  const updateSnackbarState = (newValue) => {
    setSnackbarState(newValue);
  };

  return (
    <SnackbarContext.Provider value={snackbarState}>
      <UpdateSnackbarContext.Provider value={updateSnackbarState}>
        {children}
      </UpdateSnackbarContext.Provider>
    </SnackbarContext.Provider>
  );
};

export { SnackbarContextProvider, SnackbarContext, UpdateSnackbarContext };
