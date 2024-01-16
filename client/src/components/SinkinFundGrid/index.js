import { useForm } from "react-hook-form";
import { Grid, TextField, InputAdornment } from "@mui/material";

import { columns, DEFAULT_FORM } from "./utils";

import BaseGrid from "../BaseGrid";

const SinkingFundGrid = ({
  sinkingFunds,
  handleDeleteSinkingFund,
  handleUpdateSinkingFund,
  handleAddSinkingFund,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { name, targetAmount, totalSaved, endDate } = getValues();

  const formFields = (
    <>
      <Grid item xs={4}>
        <TextField
          fullWidth
          {...register("name", { required: true })}
          error={errors?.name}
          defaultValue={name}
          variant="standard"
          helperText="Name"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("targetAmount", {
            required: true,
            valueAsNumber: true,
          })}
          error={errors?.targetAmount}
          defaultValue={targetAmount}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
          helperText="Target Amount"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("totalSaved", {
            required: true,
            valueAsNumber: true,
          })}
          error={errors?.totalSaved}
          defaultValue={totalSaved}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
          helperText="Total Saved"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("endDate")}
          defaultValue={endDate}
          variant="standard"
          helperText="End Date"
          type="date"
        />
      </Grid>
    </>
  );

  return (
    <BaseGrid
      rows={sinkingFunds}
      columns={columns}
      editGridRowProps={{
        deleteRow: handleDeleteSinkingFund,
        updateRow: handleUpdateSinkingFund,
        addRow: handleAddSinkingFund,
      }}
      modalProps={{
        title: "Edit Sinking Fund",
        fields: formFields,
        updateFormFields: reset,
        clearFormFields: () => reset(DEFAULT_FORM),
        submitForm: handleSubmit,
      }}
    />
  );
};

export default SinkingFundGrid;
