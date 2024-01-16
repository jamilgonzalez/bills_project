import { Grid, AppBar, Toolbar, Divider } from "@mui/material";

import { useState } from "react";
import UserAccountButton from "./userAccountButton";
import AccountDrawer from "./accountDrawer";

import useUser from "../../hooks/useUser";

const TopNavBar = () => {
  const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar variant="dense">
        <Grid container justifyContent={"end"}>
          <Grid item xs={1}>
            <UserAccountButton
              isLoading={isLoading}
              avatarImg={user?.avatar}
              handleOnClick={() => setIsOpen(true)}
            />
          </Grid>
        </Grid>
        <AccountDrawer
          user={user}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
        />
      </Toolbar>
      <Divider orientation="horizontal" />
    </AppBar>
  );
};

export default TopNavBar;
