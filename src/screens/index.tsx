import { FC } from 'react';

import { UserProvider } from '../context';
import { useAuthentication } from '../hooks';
import MainRouting from './main';
import OnboardingRouting from './onboarding';

const AppRouting: FC = () => {
  const { isAuthenticated, isLoading, user } = useAuthentication();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? (
    <UserProvider user={user}>
      <MainRouting />
    </UserProvider>
  ) : (
    <OnboardingRouting />
  );
};

export default AppRouting;
