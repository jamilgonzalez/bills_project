import axios from "axios";
import { useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useBudget = () => {
  const [household, setHousehold] = useState();
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
            members {
              accountId
              email
              name
              avatar
              role
            }
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

    setHousehold(household);
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
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, sinkingFunds: updatedSinkingFunds }));
    setIsLoading(false);
  };

  const deleteSinkingFund = async (id) => {
    setIsLoading(true);

    const {
      data: {
        data: { deleteSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, sinkingFunds: updatedSinkingFunds }));
    setIsLoading(false);
  };

  const addSinkingFund = async (sinkingFund) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewSinkingFund: updatedSinkingFunds },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, sinkingFunds: updatedSinkingFunds }));
    setIsLoading(false);
  };

  const addBill = async (bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { addNewBill: updatedBills },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, bills: updatedBills }));
    setIsLoading(false);
  };

  const deleteBill = async (id) => {
    setIsLoading(true);
    const {
      data: {
        data: { deleteBill: updatedBills },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, bills: updatedBills }));
    setIsLoading(false);
  };

  const updateBill = async (bill) => {
    setIsLoading(true);
    const {
      data: {
        data: { updateBill: updatedBills },
      },
    } = await axios.post(
      GRAPHQL_URL,
      {
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
      },
      { withCredentials: true }
    );

    setHousehold((prev) => ({ ...prev, bills: updatedBills }));
    setIsLoading(false);
  };

  return {
    household,
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
