import { FC } from 'react';

import { useAuthentication } from '../hooks';

import OnboardingRouting from './onboarding';
import MainRouting from './main';

const AppRouting: FC = () => {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <MainRouting /> : <OnboardingRouting />;
};

export default AppRouting;
