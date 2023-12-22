import { Button } from "@mui/material";

const DeleteButton = ({ selectedRows, handleOnClick }) => {
  return selectedRows.length > 0 ? (
    <Button
      sx={{ color: "red", backgroundColor: "#ffbdbd" }}
      fullWidth
      onClick={handleOnClick}
    >
      Delete
    </Button>
  ) : (
    <></>
  );
};

export default DeleteButton;
