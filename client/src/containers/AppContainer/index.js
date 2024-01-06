import TopNavBar from "../../components/TopNavBar";
import userUser from "../../hooks/userUser";

const AppContainer = ({ children }) => {
  const { user, isLoading } = userUser();

  return (
    <>
      <TopNavBar user={user} isLoading={isLoading} />
      {children}
    </>
  );
};

export default AppContainer;
