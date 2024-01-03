import {
  Grid,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import WithCaption from "../WithCaption";

const TopNavBar = ({ user }) => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar variant="dense">
        <Grid container justifyContent={"end"}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}>
            <IconButton
              onClick={handleClick}
              size="large"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Grid>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <Grid
              container
              sx={{ height: "auto", padding: "10px" }}
              direction={"column"}
              spacing={1}>
              <Grid container justifyContent={"center"} item xs={6}>
                <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
              </Grid>
              <Grid sx={{ textAlign: "center" }} item xs={12}>
                <WithCaption caption={"Email"} justifyCaption="center">
                  <Typography variant="body2">{user?.email}</Typography>
                </WithCaption>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <WithCaption caption={"Account ID"} justifyCaption="center">
                  <Typography variant="body2">{user?.accountId}</Typography>
                </WithCaption>
              </Grid>
            </Grid>

            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await axios.post("http://localhost:3001/auth/logout");
                navigate("/login");
              }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
      <Divider orientation="horizontal" />
    </AppBar>
  );
};

export default TopNavBar;
