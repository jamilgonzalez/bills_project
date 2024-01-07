import axios from "axios";
import { useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const useUser = () => {
  const [user, setUser] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const { data } = await axios.post(
      GRAPHQL_URL,
      {
        query: `
          query User {
            user {
              email
              accountId
              avatar
              householdId
              name
            }
          }`,
      },
      { withCredentials: true }
    );

    if (data.data) {
      const {
        data: { user },
      } = data;
      setUser(user);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { isLoading, user };
};

export default useUser;
