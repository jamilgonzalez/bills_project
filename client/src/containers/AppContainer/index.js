import { useSearchParams } from "react-router-dom";

import TopNavBar from "../../components/TopNavBar";
import userUser from "../../hooks/userUser";
import { useEffect } from "react";

const AppContainer = ({ children }) => {
  const { user, isLoading } = userUser();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("householdId", user.householdId);
      return prev;
    });
  }, [user]);

  return (
    <>
      <TopNavBar user={user} isLoading={isLoading} />
      {children}
    </>
  );
};

export default AppContainer;
