import { createContext, FC, ReactNode, useMemo } from 'react';

import { TUser, TUserInfo } from '../types';

export const UserContext = createContext<{
  user: TUser | null;
  userInfo: TUserInfo | null;
}>({
  user: null,
  userInfo: null,
});

export const UserProvider: FC<{
  user: TUser;
  userInfo: TUserInfo;
  children: ReactNode;
}> = ({ user, userInfo, children }) => {
  const memorizedUserState = useMemo(
    () => ({ user, userInfo }),
    [user, userInfo]
  );

  return (
    <UserContext.Provider value={memorizedUserState}>
      {children}
    </UserContext.Provider>
  );
};
