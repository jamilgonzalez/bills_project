import React from "react";

import TopNavBar from "../../components/TopNavBar";
import useUser from "../../hooks/useUser";

const AppContainer = ({ children }) => {
  const { user, isLoading } = useUser();

  return (
    <React.Fragment>
      <TopNavBar user={user} isLoading={isLoading} />
      {children}
    </React.Fragment>
  );
};

export default AppContainer;
