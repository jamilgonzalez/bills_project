import {
  Grid,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
  ListItemIcon,
  AppBar,
  Toolbar,
  Divider,
  Skeleton,
  Badge,
  Drawer,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PersonAdd from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TopNavBar = ({ user, isLoading }) => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar variant="dense">
        <Grid container justifyContent={"end"}>
          <Grid item xs={1}>
            <IconButton
              onClick={(event) => setAnchorEl(event.currentTarget)}
              size="large"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              {isLoading ? (
                <Skeleton variant="circular" width={32} height={32} />
              ) : (
                <Badge variant="dot" badgeContent={1} color="error">
                  <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
                </Badge>
              )}
            </IconButton>
          </Grid>

          <Drawer
            anchor={"right"}
            open={open}
            onClose={handleClose}
            onClick={handleClose}>
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
              Invites
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
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
        </Grid>
      </Toolbar>

      <Divider orientation="horizontal" />
    </AppBar>
  );
};

export default TopNavBar;
