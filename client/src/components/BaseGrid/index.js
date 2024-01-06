import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import PlaylistAddTwoToneIcon from "@mui/icons-material/PlaylistAddTwoTone";

import DeleteButton from "../DeleteButton";
import EditModal from "../EditModal";

import { UpdateSnackbarContext } from "../../context";

const BaseGrid = ({
  rows,
  columns,
  editGridRowProps,
  modalProps,
  canAddRow = true,
  canDeleteRow = true,
}) => {
  const apiRef = useGridApiRef();
  const { addRow, deleteRow, updateRow } = editGridRowProps;
  const { title, fields, updateFormFields, clearFormFields, submitForm } =
    modalProps;
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updateSnackbarState = useContext(UpdateSnackbarContext);

  return (
    rows && (
      <Grid container direction={"row"} item xs>
        {canAddRow ? (
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
        ) : (
          <></>
        )}
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
            showCellVerticalBorder
            apiRef={apiRef}
            onRowDoubleClick={({ row }) => {
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
            disableRowSelectionOnClick
            checkboxSelection={canDeleteRow}
          />
        </Grid>
        <EditModal
          isOpen={isModalOpen}
          handleClose={() => {
            clearFormFields();
            setIsModalOpen(false);
          }}>
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
              <Button
                onClick={() => {
                  clearFormFields();
                  setIsModalOpen(false);
                }}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={submitForm(async (data) => {
                  const isAddingNewRow = !data.id;
                  let message;
                  try {
                    if (isAddingNewRow) {
                      await addRow(data);
                      message = `${data.name} has been added successfully!`;
                    } else {
                      await updateRow(data);
                      message = `${data.name} has been updated successfully!`;
                    }
                    updateSnackbarState({
                      severity: "success",
                      message,
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
                  clearFormFields();
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
