import {
  Grid,
  LinearProgress,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";

import { useNavigate, useSearchParams } from "react-router-dom";
import Dates from "../../components/Dates";
import WithCaption from "../../components/WithCaption";
import useBudget from "../../hooks/useBudget";
import { USDollar } from "../../utils";
import TabNavigation from "../../components/TabNavigation";
import BillsGrid from "../../components/BillsGrid";
import IncomesGrid from "../../components/IncomesGrid";
import AppSnackbar from "../../components/AppSnackbar";
import { SnackbarContextProvider } from "../../context";
import SinkingFundGrid from "../../components/SinkinFundGrid";
import BudgetingContainer from "../../components/BudgetingContainer";

import { useState } from "react";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  let navigate = useNavigate();
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
    user,
  } = useBudget({
    startDate,
    endDate,
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar variant="dense">
          <Grid container justifyContent={"end"}>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}>
              <IconButton
                onClick={handleClick}
                size="large"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Grid>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              <Grid
                container
                sx={{ height: "auto", padding: "10px" }}
                direction={"column"}
                spacing={1}>
                <Grid container justifyContent={"center"} item xs={6}>
                  <Avatar src={user?.avatar} sx={{ width: 32, height: 32 }} />
                </Grid>
                <Grid item xs={6}>
                  <WithCaption caption={"Email"}>
                    <Typography variant="body2">{user?.email}</Typography>
                  </WithCaption>
                </Grid>
                <Grid item xs={6}>
                  <WithCaption caption={"Account ID"}>
                    <Typography variant="body2">{user?.accountId}</Typography>
                  </WithCaption>
                </Grid>
              </Grid>

              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem
                onClick={async () => {
                  await axios.post("http://localhost:3001/auth/logout");
                  navigate("/login");
                }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
        <Divider orientation="horizontal" />
      </AppBar>

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
