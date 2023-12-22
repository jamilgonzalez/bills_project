const { Modal, Typography, Card, Grid } = require("@mui/material");

const EditModal = ({ isOpen, handleClose, children }) => {
  return isOpen ? (
    <Modal open={isOpen} onClose={handleClose}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "500px",
          width: "700px",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </Card>
    </Modal>
  ) : (
    <></>
  );
};

export default EditModal;
