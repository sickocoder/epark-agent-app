import { onSnapshot, query, Unsubscribe } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { makeFirestoreService } from '../factories';
import { TParkItem } from '../types';
import useNotification from './use-notification';

const useGetSlots = () => {
  const { notificationCenter } = useNotification();

  const [parkingSlots, setParkingSlots] = useState<ReadonlyArray<TParkItem>>(
    []
  );

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    (async () => {
      try {
        const service = makeFirestoreService();
        const collectionData = service.getCollection(
          'locations/luanda/viana/alimenta-angola/slots'
        );

        const q = query(collectionData);

        unsubscribe = onSnapshot(
          q,
          (querySnapshot) => {
            const listOfSlots: Array<TParkItem> = [];

            querySnapshot.forEach((doc) => {
              const slotData = doc.data();
              const slot: TParkItem = {
                id: doc.id,
                slotId: slotData.id,
                isAvailabel: slotData.isAvailabel,
                mobil: slotData.mobil,
                name: slotData.name,
                path: doc.ref.path,
                park: slotData.park,
              };

              listOfSlots.push(slot);
            });

            setParkingSlots(
              listOfSlots
                .filter((slot) => !slot.isAvailabel)
                .sort((a, b) => a.name > b.name)
            );
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

  return { slots: parkingSlots };
};

export default useGetSlots;
