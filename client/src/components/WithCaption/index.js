import { Grid, Typography } from "@mui/material";

const WithCaption = ({ children, caption }) => {
  return (
    <>
      {children}
      <Grid item xs={12}>
        <Typography variant="body2" color={"grey"}>
          {caption}
        </Typography>
      </Grid>
    </>
  );
};

export default WithCaption;
