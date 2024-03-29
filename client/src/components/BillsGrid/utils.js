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
    width: 150,
  },
  {
    field: "paymentType",
    headerName: "Payment Type",
    width: 150,
  },
];

export const paymentTypeEnum = [
  {
    value: "",
    label: "Select Payment Type...",
  },
  {
    value: "manual",
    label: "Manual",
  },
  {
    value: "autoPay",
    label: "Auto Pay",
  },
];

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
    value: "biWeekly",
    label: "Bi-Weekly",
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
