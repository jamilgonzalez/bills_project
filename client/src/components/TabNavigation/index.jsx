import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

const availableTabs = [
  {
    value: "budgeting",
    label: "Budgeting",
  },

  {
    value: "incomeStreams",
    label: "Income Streams",
  },
  {
    value: "bills",
    label: "Bills",
  },
  {
    value: "sinkingFunds",
    label: "Sinking Funds",
  },
];

const TabNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState(
    searchParams.get("tab") || "expenses"
  );

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("tab", currentTab);
      return prev;
    });
  }, [currentTab]);
  return (
    <Tabs
      value={currentTab}
      onChange={(_, selectedTab) => setCurrentTab(selectedTab)}
      textColor="primary"
      indicatorColor="primary"
    >
      {availableTabs.map(({ value, label }) => (
        <Tab value={value} label={label} key={value} />
      ))}
    </Tabs>
  );
};

export default TabNavigation;
