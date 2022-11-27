import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setAuthenticated(true)
            : setAuthenticated(false));
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      }
    );

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return { isAuthenticated: authenticated, isLoading };
};

export default useAuthentication;
