import { Avatar, Button, Grid, Typography } from "@mui/material";

import googleIcon from "../../images/google_logo.png";
// import xIcon from "../../images/x_logo_2.png";

const Login = () => {
  const socialSigninButtons = [
    {
      href: "/auth/google",
      startIcon: <Avatar src={googleIcon} />,
      sx: {
        textTransform: "none",
        backgroundColor: "transparent",
        color: "black",
      },
      text: "Sign in with Google",
    },
    // {
    //   href: "/auth/google",
    //   startIcon: <Avatar src={xIcon} />,
    //   sx: {
    //     textTransform: "none",
    //     backgroundColor: "black",
    //     color: "white",
    //     "&:hover": {
    //       backgroundColor: "lightGrey",
    //       color: "black",
    //     },
    //   },
    //   text: "Sign in with 𝕏",
    // },
  ];
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      style={{ height: "inherit" }}
      spacing={2}>
      <Grid
        justifyContent={"center"}
        alignContent={"center"}
        container
        item
        xs={12}
        sx={{ paddingBottom: "10px" }}>
        <Typography variant="h2">
          Login to <b>Bills Project</b>
        </Typography>
      </Grid>
      <Grid container items xs={4} direction={"column"} spacing={1}>
        {socialSigninButtons.map(({ href, startIcon, sx, text }) => {
          return (
            <Grid
              key={href}
              justifyContent={"center"}
              alignContent={"center"}
              container
              item
              xs={4}>
              <Button
                href={href}
                startIcon={startIcon}
                sx={sx}
                fullWidth
                variant="contained"
                disableTouchRipple>
                <Grid container justifyContent={"center"} item xs={3}>
                  {text}
                </Grid>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Login;
