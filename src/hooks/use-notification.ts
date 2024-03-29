import { useContext } from 'react';

import { NotificationContext } from '../context/notification-context';

const useNotification = () => {
  const notificationConsumer = useContext(NotificationContext);

  return { notificationCenter: notificationConsumer };
};

export default useNotification;
