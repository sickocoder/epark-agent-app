import { createContext, FC, ReactNode, useMemo } from 'react';

import { TUser } from '../types';

export const UserContext = createContext<{ user: TUser | null }>({
  user: null,
});

export const UserProvider: FC<{ user: TUser; children: ReactNode }> = ({
  user,
  children,
}) => {
  const memorizedUserState = useMemo(() => ({ user }), [user]);

  return (
    <UserContext.Provider value={memorizedUserState}>
      {children}
    </UserContext.Provider>
  );
};
