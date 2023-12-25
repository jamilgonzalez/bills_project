import { useForm } from "react-hook-form";
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@mui/material";

import { columns, DEFAULT_FORM } from "./utils";
import { frequency as frequencyEnum } from "../BillsGrid/utils";
import BaseGrid from "../BaseGrid";

const IncomesGrid = ({
  incomes,
  handleDeleteIncome,
  handleUpdateIncome,
  handleAddIncome,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { name, amount, nextPayDay, frequency } = getValues();

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
          {...register("amount", {
            required: true,
            valueAsNumber: true,
          })}
          error={errors?.amount}
          defaultValue={amount}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
          helperText="amount"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("nextPayDay", { required: true })}
          defaultValue={nextPayDay}
          error={errors?.nextPayDay}
          type="date"
          variant="standard"
          helperText="Next Payday"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Select
            {...register("frequency", { required: true })}
            variant="standard"
            error={errors?.frequency}
            fullWidth
            label="Frequency"
            defaultValue={frequency}>
            {frequencyEnum.map((f) => {
              return (
                <MenuItem key={f.value} value={f.value}>
                  {f.label}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText sx={{ marginLeft: "0px" }}>Frequency</FormHelperText>
        </FormControl>
      </Grid>
    </>
  );

  return (
    <BaseGrid
      rows={incomes}
      columns={columns}
      editGridRowProps={{
        deleteRow: handleDeleteIncome,
        updateRow: handleUpdateIncome,
        addRow: handleAddIncome,
      }}
      modalProps={{
        title: "Income Streams",
        fields: formFields,
        updateFormFields: reset,
        clearFormFields: () => reset(DEFAULT_FORM),
        submitForm: handleSubmit,
      }}
    />
  );
};

export default IncomesGrid;
