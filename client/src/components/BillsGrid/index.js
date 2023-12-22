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

import { columns, frequency as frequencyEnum } from "./utils";

import BaseGrid from "../BaseGrid";

const BillsGrid = ({
  bills,
  handleAddBill,
  handleBillDelete,
  handleBillUpdate,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { name, amount, dueDate, payAccount, frequency } = getValues();

  const formFields = (
    <>
      <Grid item xs={4}>
        <TextField
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
          helperText="Amount"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("dueDate", { required: true })}
          defaultValue={dueDate}
          variant="standard"
          helperText="Due date"
          type="date"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          {...register("payAccount", { required: true })}
          defaultValue={payAccount}
          variant="standard"
          helperText="Pay Account"
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
      rows={bills}
      columns={columns}
      editGridRowProps={{
        deleteRow: handleBillDelete,
        updateRow: handleBillUpdate,
        addRow: handleAddBill,
      }}
      modalProps={{
        title: "Bills",
        fields: formFields,
        updateFormFields: reset,
        submitForm: handleSubmit,
      }}
    />
  );
};

export default BillsGrid;
