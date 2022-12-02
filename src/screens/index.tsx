import { FC } from 'react';

import { useAuthentication } from '../hooks';

import OnboardingRouting from './onboarding';
import MainRouting from './main';
import { UserProvider } from '../context';

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
