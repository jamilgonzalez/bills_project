const {
  Modal,
  Card,
  Grid,
  Typography,
  Button,
  Divider,
} = require("@mui/material");

const EditModal = ({
  title,
  isOpen,
  handleClose,
  handleOnSubmit,
  children,
  withSubmitButtons = true,
}) => {
  return isOpen ? (
    <Modal open={isOpen} onClose={handleClose}>
      <Card
        sx={{
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "400px",
          width: "800px",
          transform: "translate(-50%, -50%)",
        }}>
        <Grid container sx={{ padding: "15px" }}>
          <Grid item xs={12}>
            <Typography variant="body1">{title}</Typography>
            <Divider sx={{ padding: "5px" }} />
          </Grid>
          {children}
          {withSubmitButtons && (
            <Grid
              container
              sx={{
                textAlign: "center",
              }}
              item
              xs={12}
              justifyContent={"flex-end"}
              alignContent={"center"}>
              <Grid item xs={2}>
                <Button onClick={handleClose}>Cancel</Button>
              </Grid>
              <Grid item xs={2}>
                <Button onClick={handleOnSubmit}>Submit</Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Card>
    </Modal>
  ) : (
    <></>
  );
};

export default EditModal;
