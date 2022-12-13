import { FC } from 'react';

import { NotificationProvider, UserProvider } from '../context';
import { useAuthentication } from '../hooks';
import MainRouting from './main';
import OnboardingRouting from './onboarding';

const AppRouting: FC = () => {
  const { isAuthenticated, isLoading, user } = useAuthentication();

  if (isLoading) {
    return null;
  }

  return (
    <NotificationProvider>
      {isAuthenticated ? (
        <UserProvider user={user}>
          <MainRouting />
        </UserProvider>
      ) : (
        <OnboardingRouting />
      )}
    </NotificationProvider>
  );
};

export default AppRouting;
