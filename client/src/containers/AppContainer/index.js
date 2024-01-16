import React from "react";

import TopNavBar from "../../components/TopNavBar";

const AppContainer = ({ children }) => {
  return (
    <React.Fragment>
      <TopNavBar />
      {children}
    </React.Fragment>
  );
};

export default AppContainer;
