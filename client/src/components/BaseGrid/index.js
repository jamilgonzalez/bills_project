import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import PlaylistAddTwoToneIcon from "@mui/icons-material/PlaylistAddTwoTone";

import DeleteButton from "../DeleteButton";
import EditModal from "../EditModal";

import { UpdateSnackbarContext } from "../../context";

const BaseGrid = ({ rows, columns, editGridRowProps, modalProps }) => {
  const apiRef = useGridApiRef();
  const { addRow, deleteRow, updateRow } = editGridRowProps;
  const { title, fields, updateFormFields, submitForm } = modalProps;
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updateSnackbarState = useContext(UpdateSnackbarContext);

  return (
    rows && (
      <Grid container direction={"row"} item xs>
        <Grid
          container
          item
          xs={12}
          sx={{ height: "40px" }}
          justifyContent={"end"}>
          <Button
            startIcon={<PlaylistAddTwoToneIcon fontSize="large" />}
            onClick={() => setIsModalOpen(true)}>
            Add Row
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ height: "40px" }}>
          <DeleteButton
            selectedRows={selectedRows}
            handleOnClick={async () => {
              try {
                await Promise.all(selectedRows.map((row) => deleteRow(row.id)));
                setSelectedRows([]);
                updateSnackbarState({
                  severity: "success",
                  message: "Row successfully deleted!",
                  isOpen: true,
                });
              } catch (err) {
                console.error(err);
                updateSnackbarState({
                  severity: "error",
                  message: "Error deleting row.",
                  isOpen: true,
                });
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            apiRef={apiRef}
            onRowDoubleClick={({ row }) => {
              console.log(row);
              updateFormFields(row);
              setIsModalOpen(true);
            }}
            onRowSelectionModelChange={() => {
              setSelectedRows(
                Array.from(apiRef.current.getSelectedRows().values())
              );
            }}
            rows={rows}
            columns={columns}
            hideFooterSelectedRowCount
            autoHeight
            disableRowSelectionOnClick
            checkboxSelection
          />
        </Grid>
        <EditModal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}>
          <Grid container sx={{ padding: "15px" }} spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h3">{title}</Typography>
            </Grid>
            {fields}
          </Grid>
          <Grid
            container
            sx={{ marginTop: "150px", textAlign: "center" }}
            item
            xs={12}
            justifyContent={"flex-end"}
            alignContent={"center"}>
            <Grid item xs={1}>
              <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={submitForm(async (data) => {
                  const isAddingNewRow = !data.id;
                  try {
                    if (isAddingNewRow) {
                      await addRow(data);
                    } else {
                      await updateRow(data);
                    }
                    updateSnackbarState({
                      severity: "success",
                      message: `${data.name} has been updated successfully!`,
                      isOpen: true,
                    });
                    setIsModalOpen(false);
                  } catch (err) {
                    console.error(err);
                    updateSnackbarState({
                      severity: "error",
                      message: `Error updating ${data.name}.`,
                      isOpen: true,
                    });
                  }
                })}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </EditModal>
      </Grid>
    )
  );
};

export default BaseGrid;
