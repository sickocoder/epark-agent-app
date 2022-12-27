import { onSnapshot, query, Unsubscribe } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { makeFirestoreService } from '../factories';
import { TParkingHistory } from '../types';
import useNotification from './use-notification';

const useGetHistory = () => {
  const { notificationCenter } = useNotification();

  const [history, setHistory] = useState<ReadonlyArray<TParkingHistory>>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    (async () => {
      try {
        const service = makeFirestoreService();
        const collectionData = service.getCollection('history');

        const q = query(collectionData);

        unsubscribe = onSnapshot(
          q,
          (querySnapshot) => {
            const listOfHistory: Array<TParkingHistory> = [];

            querySnapshot.forEach((doc) => {
              const historyRecord = doc.data() as unknown as TParkingHistory;

              listOfHistory.push(historyRecord);
            });

            setHistory(listOfHistory.sort((a, b) => a.name > b.name));
          },
          (_error) => {
            notificationCenter.showNotification({
              message: 'Ocorreu um erro ao carregar os dados!',
              variant: 'danger',
            });
          }
        );
      } catch (error) {
        notificationCenter.showNotification({
          message: 'Ocorreu um erro ao carregar os dados!',
          variant: 'danger',
        });
      }
    })();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [notificationCenter]);

  return { history };
};

export default useGetHistory;
