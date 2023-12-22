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

import { columns } from "./utils";
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

  const { description, amount, nextPayDay, frequency } = getValues();

  const formFields = (
    <>
      <Grid item xs={4}>
        <TextField
          fullWidth
          {...register("name", { required: true })}
          error={errors?.name}
          defaultValue={description}
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
          type="date"
          variant="standard"
          helperText="Pay Day"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Select
            {...register("frequency")}
            variant="standard"
            fullWidth
            label="Frequency"
            defaultValue={frequency}
          >
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
        submitForm: handleSubmit,
      }}
    />
  );
};

export default IncomesGrid;
