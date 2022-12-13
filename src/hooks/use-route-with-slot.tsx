import { useRoute } from '@react-navigation/native';

import { TParkItem } from '../types';

const useRouteWithSlot = () => {
  const route = useRoute();
  const { slot } = route.params as { slot: TParkItem };

  return { ...route, params: { ...route.params, slot } };
};

export default useRouteWithSlot;
