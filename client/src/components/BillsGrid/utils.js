export const columns = [
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
  {
    field: "payAccount",
    headerName: "Pay Account",
    width: 100,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    type: "number",
  },
  {
    field: "paymentStatus",
    headerName: "Status",
  },
];

export const frequency = [
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

export const DEFAULT_FORM = {
  name: "",
  frequency: "",
};
