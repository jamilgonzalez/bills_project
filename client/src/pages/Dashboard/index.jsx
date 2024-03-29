import { Grid, LinearProgress, Typography } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import Dates from "../../components/Dates";
import WithCaption from "../../components/WithCaption";
import useBudget from "../../hooks/useBudget";
import { USDollar } from "../../utils";
import TabNavigation from "../../components/TabNavigation";
import BillsGrid from "../../components/BillsGrid";
import AppSnackbar from "../../components/AppSnackbar";
import { SnackbarContextProvider } from "../../context";
import SinkingFundGrid from "../../components/SinkinFundGrid";
import BudgetingContainer from "../../components/BudgetingContainer";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const {
    household,
    isLoading,
    addBill,
    deleteBill,
    updateBill,
    addSinkingFund,
    deleteSinkingFund,
    updateSinkingFund,
    incomeBreakdown,
  } = useBudget({ startDate, endDate });

  function renderDataGrid(currentTab) {
    switch (currentTab) {
      case "budgeting":
        return <BudgetingContainer />;
      case "bills":
        return (
          <BillsGrid
            bills={household?.bills}
            handleBillDelete={deleteBill}
            handleBillUpdate={updateBill}
            handleAddBill={addBill}
          />
        );
      case "sinkingFunds":
        return (
          <SinkingFundGrid
            sinkingFunds={household?.sinkingFunds}
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
    <>
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
    </>
  );
};

export default Dashboard;
