import TopNavBar from "../../components/TopNavBar";
import userUser from "../../hooks/userUser";

const AppContainer = ({ children }) => {
  const { user } = userUser();

  return (
    <>
      <TopNavBar user={user} />
      {children}
    </>
  );
};

export default AppContainer;
