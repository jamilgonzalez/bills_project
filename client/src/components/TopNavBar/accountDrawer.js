import {
  Grid,
  Typography,
  Avatar,
  MenuItem,
  ListItemIcon,
  Divider,
  Badge,
  Drawer,
} from "@mui/material";
import axios from "axios";
import MailIcon from "@mui/icons-material/Mail";
import HouseIcon from "@mui/icons-material/House";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MembersModal from "./membersModal";

const AccountDrawer = ({ user, isOpen, handleClose }) => {
  const navigate = useNavigate();
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);

  return (
    <>
      <Drawer anchor={"right"} open={isOpen} onClose={handleClose}>
        <Grid container direction={"row"} sx={{ padding: "7px" }}>
          <Grid
            container
            alignContent={"center"}
            justifyContent={"center"}
            item
            xs={3}>
            <Avatar src={user?.avatar} />
          </Grid>
          <Grid container item xs={9} justifyContent={"start"}>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {user?.name}
              </Typography>
            </Grid>
            <Grid item xs={12} color={"gray"}>
              <Typography variant="caption">{user?.email}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* menu items */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Badge badgeContent={1} color="error">
              <MailIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          Messages
        </MenuItem>
        <MenuItem onClick={() => setIsMembersModalOpen(true)}>
          <ListItemIcon>
            <HouseIcon fontSize="small" />
          </ListItemIcon>
          Members
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={async () => {
            await axios.post("http://localhost:3001/auth/logout");
            navigate("/login");
          }}>
          Sign out
        </MenuItem>
      </Drawer>

      {/* modals */}
      <MembersModal
        user={user}
        isOpen={isMembersModalOpen}
        handleClose={() => setIsMembersModalOpen(false)}
      />
    </>
  );
};

export default AccountDrawer;
