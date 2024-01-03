import axios from "axios";
import { useEffect, useState } from "react";

const GRAPHQL_URL = "http://localhost:3001/graphql";

const TEST_USER = {
  email: "jamil.a.gonzalez91@gmail.com",
  accountId: "111851856177559868548",
};

const useUser = () => {
  const [user, setUser] = useState(TEST_USER);

  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    const { data } = await axios.post(GRAPHQL_URL, {
      query: `
          query User {
            user {
              email
              accountId
              avatar
            }
          }`,
    });

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
