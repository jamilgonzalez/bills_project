import axios from "axios";
import { useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useBudget = ({ startDate, endDate }) => {
  const [bills, setBills] = useState();
  const [sinkingFunds, setSinkingFunds] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchHousehold() {
    const {
      data: {
        data: { household },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
        query Household {
          household {
            id
            activeBudget {
              start
              end
              payDays {
                name
                date
                amount
              }
              bills {
                id
                name
                amount
                dueDate
                paymentType
                payAccount
                frequency
              }
              sinkingFunds {
                id
                name
                targetAmount
                totalSaved
                percentComplete
                weeklyContribution
                endDate
              }
            }
            archivedBudgets {
              start
              end
              payDays {
                name
                date
                amount
              }
            }
            bills {
              id
              name
              amount
              dueDate
              paymentType
              payAccount
              frequency
            }
            sinkingFunds {
              id
              name
              targetAmount
              totalSaved
              percentComplete
              weeklyContribution
              endDate
            }
          }
        }
      `,
    });

    const { bills, sinkingFunds } = household;
    setBills(bills);
    setSinkingFunds(sinkingFunds);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchHousehold();
  }, []);

  const updateSinkingFund = async (
    householdId,
    { id, name, targetAmount, totalSaved, endDate }
  ) => {
    setIsLoading(true);

    const {
      data: {
        data: { updateSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation UpdateSinkingFund($input: UpdateSinkingFundMutation) {
        updateSinkingFund(input: $input) {
          id
          name
          targetAmount
          totalSaved
          percentComplete
          weeklyContribution
          endDate
        }
      }`,
      variables: {
        input: {
          householdId,
          sinkingFund: { id, name, targetAmount, totalSaved, endDate },
        },
      },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const deleteSinkingFund = async (householdId, sinkingFundId) => {
    setIsLoading(true);

    const {
      data: {
        data: { deleteSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation DeleteSinkingFund($householdId: ID!, $sinkingFundId: ID!) {
        deleteSinkingFund(householdId: $householdId, sinkingFundId: $sinkingFundId) {
          id
          name
          targetAmount
          totalSaved
          percentComplete
          weeklyContribution
          endDate
        }
      }`,
      variables: { householdId, sinkingFundId },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const addSinkingFund = async (householdId, sinkingFund) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation AddNewSinkingFund($input: AddNewSinkingFundInput) {
        addNewSinkingFund(input: $input) {
          id
          name
          targetAmount
          totalSaved
          percentComplete
          weeklyContribution
          transactions {
            date
            amount
            description
          }
          endDate
        }
      }`,
      variables: { input: { householdId, sinkingFund } },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const addBill = async (householdId, bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewBill: updatedBills },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation AddNewBill($input: AddBillInput) {
        addNewBill(input: $input) {
          id
          name
          amount
          dueDate
          paymentType
          payAccount
          frequency
        }
      }`,
      variables: { input: { householdId, bill } },
    });

    setBills(updatedBills);
    setIsLoading(false);
  };

  const deleteBill = async (householdId, billId) => {
    setIsLoading(true);
    const {
      data: {
        data: { deleteBill },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation DeleteBill($householdId: ID!, $billId: ID!) {
        deleteBill(householdId: $householdId, billId: $billId) {
          id
          name
          amount
          dueDate
          paymentType
          payAccount
          frequency
        }
      }
      `,
      variables: { householdId, billId },
    });

    setBills(deleteBill);
    setIsLoading(false);
  };

  const updateBill = async (householdId, bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { updateBill },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation UpdateBill($input: UpdateBillMutation) {
        updateBill(input: $input) {
          id
          name
          amount
          dueDate
          paymentType
          payAccount
          frequency
        }
      }
      `,
      variables: { input: { householdId, bill } },
    });

    setBills(updateBill);
    setIsLoading(false);
  };

  return {
    bills,
    sinkingFunds,
    isLoading,
    addBill,
    addSinkingFund,
    deleteBill,
    deleteSinkingFund,
    updateBill,
    updateSinkingFund,
  };
};

export default useBudget;
