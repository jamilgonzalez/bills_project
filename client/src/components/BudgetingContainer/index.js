import { Typography, Grid, Card } from "@mui/material";
import BaseGrid from "../BaseGrid";

import WithCaption from "../WithCaption";
import { USDollar } from "../../utils";

const BUDGET = {
  budgetPlan: {
    id: 111 - 222 - 333,
    active: {
      sessions: [
        {
          id: 1,
          start: "Dec 28th",
          end: "Jan 1st ",
          remainingIncome: 356.9,
          paydays: [
            {
              name: "disney streaming",
              date: "2023-12-28",
              amount: 1689.7,
            },
            {
              name: "bah",
              date: "2024-01-01",
              amount: 169.1,
            },
          ],
          bills: [
            {
              id: "2c9f4680-4ce0-4b09-9859-96448bff38aa",
              name: "Spectrum Internet",
              amount: 69.98,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "b32611b1-c752-462f-8714-d2d57dd23476",
              name: "Spotify",
              amount: 17.01,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "a56b0e4b-d36a-450e-b589-c7187b1ce465",
              name: "Mac Mini",
              amount: 28.99,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "e11b009e-1492-4599-8638-a99821ce39fe",
              name: "iPhone (Jamil)",
              amount: 25.79,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
          ],
          sinkingFundsTotal: 435.2,
        },
        {
          id: 2,
          start: "Jan 2nd",
          end: "Jan 9th",
          remainingIncome: -200,
          paydays: [
            {
              name: "disney streaming",
              date: "2024-01-04",
              amount: 1689.7,
            },
          ],
          bills: [
            {
              id: "0db31433-7238-48d6-a3c2-566ad3b9d64e",
              name: "Culligan",
              amount: 97,
              dueDate: "2024-01-22",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "732f4dbb-9acd-4037-b393-b0480f9d03b8",
              name: "T-Mobile",
              amount: 85.15,
              dueDate: "2024-01-25",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
          ],
          sinkingFundsTotal: 435.2,
        },
        {
          id: 3,
          start: "Jan 10th",
          end: "Jan 17th ",
          remainingIncome: 356.9,
          paydays: [
            {
              name: "disney streaming",
              date: "2023-12-28",
              amount: 1689.7,
            },
            {
              name: "bah",
              date: "2024-01-01",
              amount: 169.1,
            },
          ],
          bills: [
            {
              id: "7f62595f-dc81-40d2-8a90-03c3e9c57a69",
              name: "Water - TOHO",
              amount: 73.19,
              dueDate: "2024-01-27",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "c97f7bf0-b82d-4b01-8567-e69e2c10d590",
              name: "Ring Alarm",
              amount: 10.75,
              dueDate: "2024-01-27",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "67b592fa-4172-449c-8175-f6a1b9eedcca",
              name: "Instacart",
              amount: 9.99,
              dueDate: "2024-01-27",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "8484f055-1782-4229-888d-1c0d6670aaad",
              name: "Nelnet",
              amount: 103.8,
              dueDate: "2024-01-20",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "2a20c7d8-8f8f-4d21-8d41-3c2209f4e092",
              name: "iCloud",
              amount: 9.99,
              dueDate: "2024-01-28",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "2c9f4680-4ce0-4b09-9859-96448bff38aa",
              name: "Spectrum Internet",
              amount: 69.98,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "b32611b1-c752-462f-8714-d2d57dd23476",
              name: "Spotify",
              amount: 17.01,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "a56b0e4b-d36a-450e-b589-c7187b1ce465",
              name: "Mac Mini",
              amount: 28.99,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "e11b009e-1492-4599-8638-a99821ce39fe",
              name: "iPhone (Jamil)",
              amount: 25.79,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "dc5beb44-e9ca-4d12-a580-496e718046c8",
              name: "Fitbod App",
              amount: 12.99,
              dueDate: "2024-01-25",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
          ],
          sinkingFundsTotal: 435.2,
        },
        {
          id: 4,
          start: "Jan 18th",
          end: "Jan 25th ",
          remainingIncome: 356.9,
          paydays: [
            {
              name: "disney streaming",
              date: "2023-12-28",
              amount: 1689.7,
            },
            {
              name: "bah",
              date: "2024-01-01",
              amount: 169.1,
            },
          ],
          bills: [
            {
              id: "7f62595f-dc81-40d2-8a90-03c3e9c57a69",
              name: "Water - TOHO",
              amount: 73.19,
              dueDate: "2024-01-27",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "c97f7bf0-b82d-4b01-8567-e69e2c10d590",
              name: "Ring Alarm",
              amount: 10.75,
              dueDate: "2024-01-27",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "67b592fa-4172-449c-8175-f6a1b9eedcca",
              name: "Instacart",
              amount: 9.99,
              dueDate: "2024-01-27",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "8484f055-1782-4229-888d-1c0d6670aaad",
              name: "Nelnet",
              amount: 103.8,
              dueDate: "2024-01-20",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "2a20c7d8-8f8f-4d21-8d41-3c2209f4e092",
              name: "iCloud",
              amount: 9.99,
              dueDate: "2024-01-28",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "2c9f4680-4ce0-4b09-9859-96448bff38aa",
              name: "Spectrum Internet",
              amount: 69.98,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "b32611b1-c752-462f-8714-d2d57dd23476",
              name: "Spotify",
              amount: 17.01,
              dueDate: "2023-12-30",
              paymentType: "autoPay",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "a56b0e4b-d36a-450e-b589-c7187b1ce465",
              name: "Mac Mini",
              amount: 28.99,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "e11b009e-1492-4599-8638-a99821ce39fe",
              name: "iPhone (Jamil)",
              amount: 25.79,
              dueDate: "2023-12-31",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
            {
              id: "dc5beb44-e9ca-4d12-a580-496e718046c8",
              name: "Fitbod App",
              amount: 12.99,
              dueDate: "2024-01-25",
              paymentType: "manual",
              payAccount: "bills",
              frequency: "monthly",
            },
          ],
          sinkingFundsTotal: 435.2,
        },
      ],
    },
    archived: [],
  },
};

const COLUMNS = [
  { field: "name", headerName: "Name", width: 175 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 150,
  },
];

const BudgetingContainer = () => {
  return (
    <Grid container direction={"row"} spacing={3}>
      {BUDGET.budgetPlan.active.sessions.map(
        ({ id, start, end, remainingIncome, bills }) => {
          return (
            <Grid key={id} item xs={6}>
              <Card sx={{ padding: "15px" }}>
                <Grid container justifyContent={"space-evenly"}>
                  <Grid item xs={6}>
                    <Typography variant="h5">{`${start} - ${end}`}</Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <WithCaption caption={"Total Bills"}>
                      <Typography variant="h6">
                        {USDollar.format(
                          bills.reduce((acc, bill) => acc + bill.amount, 0)
                        )}
                      </Typography>
                    </WithCaption>
                  </Grid>

                  <Grid item xs={3}>
                    <WithCaption caption={"Remaining Income"}>
                      <Typography variant="h6">
                        {USDollar.format(remainingIncome)}
                      </Typography>
                    </WithCaption>
                  </Grid>

                  <BaseGrid
                    canAddRow={false}
                    canDeleteRow={false}
                    rows={bills}
                    columns={COLUMNS}
                    editGridRowProps={{
                      addRow: () => null,
                      deleteRow: () => null,
                      updateRow: () => null,
                    }}
                    modalProps={{
                      title: "Bill",
                      filds: <></>,
                      updateFormFields: () => null,
                      clearFormFields: () => null,
                      submitForm: () => null,
                    }}
                  />
                </Grid>
              </Card>
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default BudgetingContainer;
