import axios from "axios";
import { useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useBudget = () => {
  const [bills, setBills] = useState();
  const [sinkingFunds, setSinkingFunds] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchHousehold() {
    const {
      data: {
        data: { household },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      {
        withCredentials: true,
      }
    );

    const { bills, sinkingFunds } = household;
    setBills(bills);
    setSinkingFunds(sinkingFunds);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchHousehold();
  }, []);

  const updateSinkingFund = async ({
    id,
    name,
    targetAmount,
    totalSaved,
    endDate,
  }) => {
    setIsLoading(true);

    const {
      data: {
        data: { updateSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation UpdateSinkingFund($input: UpdateSinkingFundInput!) {
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
        input: { id, name, targetAmount, totalSaved, endDate },
      },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const deleteSinkingFund = async (id) => {
    setIsLoading(true);

    const {
      data: {
        data: { deleteSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation DeleteSinkingFund($id: ID!) {
        deleteSinkingFund(id: $id) {
          id
          name
          targetAmount
          totalSaved
          percentComplete
          weeklyContribution
          endDate
        }
      }`,
      variables: { id },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const addSinkingFund = async (sinkingFund) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation AddNewSinkingFund($input: SinkingFundInput!) {
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
      variables: { input: sinkingFund },
    });

    setSinkingFunds(updatedSinkingFunds);
    setIsLoading(false);
  };

  const addBill = async (bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewBill: updatedBills },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation AddNewBill($input: AddBillInput!) {
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
      variables: { input: bill },
    });

    setBills(updatedBills);
    setIsLoading(false);
  };

  const deleteBill = async (id) => {
    setIsLoading(true);
    const {
      data: {
        data: { deleteBill },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation DeleteBill($id: ID!) {
        deleteBill(id: $id) {
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
      variables: { id },
    });

    setBills(deleteBill);
    setIsLoading(false);
  };

  const updateBill = async (bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { updateBill },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation UpdateBill($input: UpdateBillInput!) {
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
      variables: { input: bill },
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
