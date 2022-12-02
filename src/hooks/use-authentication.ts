import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { TUser } from '../types';

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setAuthenticated(true)
            : setAuthenticated(false));

          setUser({
            displayName: authenticatedUser.displayName,
            email: authenticatedUser.email,
            phoneNumber: authenticatedUser.phoneNumber,
            photoURL: authenticatedUser.photoURL,
            uid: authenticatedUser.uid,
          });

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

  return { isAuthenticated: authenticated, isLoading, user };
};

export default useAuthentication;
