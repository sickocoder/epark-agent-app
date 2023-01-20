import { FC } from 'react';

import { NotificationProvider, UserProvider } from '../context';
import { useAuthentication, useGetUserInfo } from '../hooks';
import MainRouting from './main';
import OnboardingRouting from './onboarding';

const AppRouting: FC = () => {
  const { isAuthenticated, isLoading, user } = useAuthentication();
  const { userInfo } = useGetUserInfo();

  if (isLoading) {
    return null;
  }

  return (
    <NotificationProvider>
      {isAuthenticated ? (
        <UserProvider user={user} userInfo={userInfo}>
          <MainRouting />
        </UserProvider>
      ) : (
        <OnboardingRouting />
      )}
    </NotificationProvider>
  );
};

export default AppRouting;
