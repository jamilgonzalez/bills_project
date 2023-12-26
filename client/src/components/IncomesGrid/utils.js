export const columns = [
  { field: "name", headerName: "Name", width: 225 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
  },
  {
    field: "nextPayDay",
    headerName: "Next Payday",
    width: 150,
  },

  {
    field: "frequency",
    headerName: "Frequency",
    type: "number",
  },
];

export const DEFAULT_FORM = {
  name: "",
  frequency: "",
};

export const frequencyEnum = [
  {
    value: "",
    label: "Select Frequency...",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "quarterly",
    label: "Quarterly",
  },
  {
    value: "yearly",
    label: "Yearly",
  },
];
