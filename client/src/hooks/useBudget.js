import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useBudget = ({ startDate, endDate }) => {
  const [income, setIncome] = useState();
  const [bills, setBills] = useState();
  const [incomeBreakdown, setIncomeBreakdown] = useState();
  const [billsBreakdown, setBillsBreakdown] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIncomeAndBills = useCallback(async () => {
    setIsLoading(true);
    const {
      data: {
        data: { incomeStreams, bills },
      },
    } = await axios.post(GRAPHQL_URL, {
      query: `
        query GetIncomeAndBills {
          incomeStreams {
            id
            amount
            frequency
            nextPayDay
            description
          }
          bills {
            id
            name
            amount
            dueDate
            paymentStatus
            payAccount
            frequency
          }
        }
        `,
    });

    setIncome(incomeStreams);
    setBills(bills);
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
              paymentStatus
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
          paymentStatus
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
          paymentStatus
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
            description
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
    bills,
    deleteBill,
    income,
    incomeBreakdown,
    billsBreakdown,
    isLoading,
    updateBill,
    deleteIncome,
  };
};

export default useBudget;
