import { Grid, Typography } from "@mui/material";

const WithCaption = ({ children, caption, justifyCaption = "" }) => {
  return (
    <>
      {children}
      <Grid container justifyContent={justifyCaption} item xs={12}>
        <Typography variant="caption" color={"grey"}>
          {caption}
        </Typography>
      </Grid>
    </>
  );
};

export default WithCaption;
