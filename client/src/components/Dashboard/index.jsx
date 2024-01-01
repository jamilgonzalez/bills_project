import { Grid, LinearProgress, Typography } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import Dates from "../Dates";
import WithCaption from "../WithCaption";
import useBudget from "../../hooks/useBudget";
import { USDollar } from "../../utils";
import TabNavigation from "../TabNavigation";
import BillsGrid from "../BillsGrid";
import IncomesGrid from "../IncomesGrid";
import AppSnackbar from "../AppSnackbar";
import { SnackbarContextProvider } from "../../context";
import SinkingFundGrid from "../SinkinFundGrid";
import BudgetingContainer from "../BudgetingContainer";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const {
    income,
    addIncome,
    addBill,
    bills,
    deleteBill,
    isLoading,
    incomeBreakdown,
    updateBill,
    deleteIncome,
    updateIncome,
    sinkingFunds,
    addSinkingFund,
    deleteSinkingFund,
    updateSinkingFund,
  } = useBudget({
    startDate,
    endDate,
  });

  function renderDataGrid(currentTab) {
    switch (currentTab) {
      case "budgeting":
        return <BudgetingContainer />;
      case "incomeStreams":
        return (
          <IncomesGrid
            incomes={income}
            handleDeleteIncome={deleteIncome}
            handleUpdateIncome={updateIncome}
            handleAddIncome={addIncome}
          />
        );
      case "bills":
        return (
          <BillsGrid
            bills={bills}
            handleBillDelete={deleteBill}
            handleBillUpdate={updateBill}
            handleAddBill={addBill}
          />
        );
      case "sinkingFunds":
        return (
          <SinkingFundGrid
            sinkingFunds={sinkingFunds}
            handleAddSinkingFund={addSinkingFund}
            handleDeleteSinkingFund={deleteSinkingFund}
            handleUpdateSinkingFund={updateSinkingFund}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Grid container direction={"column"} spacing={6}>
      <Grid
        container
        item
        xs={12}
        justifyContent={"center"}
        style={{ height: "150px", maxWidth: "80%", margin: "auto" }}>
        <Grid
          container
          item
          xs={7}
          style={{ margin: "auto" }}
          rowSpacing={8}
          className="app-container">
          <Grid container item xs={7} className="total-income">
            <WithCaption caption={"Total Income"}>
              <Grid item xs={12}>
                <Typography variant="h2">
                  {incomeBreakdown
                    ? USDollar.format(incomeBreakdown.netIncome)
                    : "-"}
                </Typography>
              </Grid>
            </WithCaption>
          </Grid>

          <Grid
            container
            item
            xs={5}
            className="planning-period-date-picker"
            style={{ marginTop: "auto" }}>
            <WithCaption caption={"Planning Period"}>
              <Grid item xs={12}>
                <Dates />
              </Grid>
            </WithCaption>
          </Grid>

          {/* nav to click between expenses, sinking funds and income */}
          <Grid item xs={12} className="tab-navigation">
            {isLoading && <LinearProgress />}
            <TabNavigation />
          </Grid>
        </Grid>
      </Grid>
      <SnackbarContextProvider>
        <Grid container item xs={12} justifyContent={"center"}>
          {/* displays different tabs */}
          <Grid container item xs={7} direction={"column"} spacing={3}>
            {renderDataGrid(searchParams.get("tab"))}
          </Grid>
        </Grid>

        {/* footer */}
        <AppSnackbar />
      </SnackbarContextProvider>
    </Grid>
  );
};

export default Dashboard;
