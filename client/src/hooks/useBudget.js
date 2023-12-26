import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useBudget = ({ startDate, endDate }) => {
  const [income, setIncome] = useState();
  const [bills, setBills] = useState();
  const [sinkingFunds, setSinkingFunds] = useState();
  const [incomeBreakdown, setIncomeBreakdown] = useState();
  const [billsBreakdown, setBillsBreakdown] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
          transactions {
            date
            amount
            description
          }
          endDate
        }
      }`,
      variables: { input: { id, name, targetAmount, totalSaved, endDate } },
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
          transactions {
            date
            amount
            description
          }
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
      mutation AddNewBill($input: BillInput) {
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

  const addIncome = async (incomeStream) => {
    setIsLoading(true);

    const {
      data: {
        data: { addNewIncome: updatedIncomeStreams },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation AddNewIncome($input: IncomeInput) {
        addNewIncome(input: $input) {
          id
          name
          amount
          frequency
          nextPayDay
        }
      }`,
      variables: { input: incomeStream },
    });

    setIncome(updatedIncomeStreams);
    setIsLoading(false);
  };

  const updateIncome = async (incomeStream) => {
    setIsLoading(true);
    const {
      data: {
        data: { updateIncome: updatedIncomeStreams },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
      mutation UpdateIncome($input: UpdateIncomeInput) {
        updateIncome(input: $input) {
          id
          amount
          frequency
          nextPayDay
          name
        }
      }`,
      variables: { input: incomeStream },
    });

    setIncome(updatedIncomeStreams);
    setIsLoading(false);
  };

  const getIncomeAndBills = useCallback(async () => {
    setIsLoading(true);
    const {
      data: {
        data: { incomeStreams, bills, sinkingFunds },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
        query GetIncomeAndBills {
          incomeStreams {
            id
            amount
            frequency
            nextPayDay
            name
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
            transactions {
              date
              amount
              description
            }
            endDate
          }
        }
        `,
    });

    setIncome(incomeStreams);
    setBills(bills);
    setSinkingFunds(sinkingFunds);
    setIsLoading(false);
  }, []);

  const getBudgetBreakdown = useCallback(async () => {
    setIsLoading(true);
    const {
      data: {
        data: { incomeBreakdown, billBreakdown },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
        query GetBudgetBreakdown($startDate: String!, $endDate: String!) {
          incomeBreakdown(startDate: $startDate, endDate: $endDate) {
            netIncome
            remainingIncome
          }
          billBreakdown(startDate: $startDate, endDate: $endDate) {
            startDate
            endDate
            totalAmount
            payAccounts {
              payAccount
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
          }
        }
      `,
      variables: { startDate, endDate },
    });

    setIncomeBreakdown(incomeBreakdown);
    setBillsBreakdown(billBreakdown);
    setIsLoading(false);
  }, [startDate, endDate]);

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
      mutation UpdateBill($input: UpdateBillInput) {
        updateBill(input: $input) {
          id
          name
          amount
          dueDate
          frequency
          payAccount
          paymentType
        }
      }
      `,
      variables: { input: bill },
    });

    setBills(updateBill);
    setIsLoading(false);
  };

  const deleteIncome = async (id) => {
    setIsLoading(true);
    const {
      data: {
        data: { deleteIncome: updatedIncomeStreams },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
        mutation DeleteIncome($id: ID!) {
          deleteIncome(id: $id) {
            id
            amount
            frequency
            nextPayDay
            name
          }
        }
      `,
      variables: { id },
    });
    setIncome(updatedIncomeStreams);
    setIsLoading(false);
  };

  useEffect(() => {
    getIncomeAndBills();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      getBudgetBreakdown();
    }
  }, [startDate, endDate, income, bills]);

  return {
    addBill,
    addIncome,
    addSinkingFund,
    bills,
    billsBreakdown,
    deleteBill,
    deleteIncome,
    deleteSinkingFund,
    income,
    incomeBreakdown,
    isLoading,
    sinkingFunds,
    updateBill,
    updateIncome,
    updateSinkingFund,
  };
};

export default useBudget;
