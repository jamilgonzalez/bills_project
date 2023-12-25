export const columns = [
  { field: "name", headerName: "Name", width: 225 },
  {
    field: "targetAmount",
    headerName: "Target Amount",
    type: "number",
    width: 150,
  },
  {
    field: "totalSaved",
    headerName: "Total Saved",
    width: 150,
  },
  {
    field: "percentComplete",
    headerName: "Percent Complete",
    width: 150,
  },

  {
    field: "weeklyContribution",
    headerName: "Weekly Contribution",
    type: "number",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 150,
  },
];

export const DEFAULT_FORM = {
  name: "",
};
