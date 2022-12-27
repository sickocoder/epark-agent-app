import {
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { makeFirestoreService } from '../factories';
import { TUserInfo } from '../types';
import useAuthentication from './use-authentication';
import useNotification from './use-notification';

const useGetUserInfo = () => {
  const { user } = useAuthentication();

  const [userInfo, setUserInfo] = useState<TUserInfo>(null);

  useEffect(() => {
    (async () => {
      if (!user) return;

      try {
        const firestoreService = makeFirestoreService();

        const docRef = doc(firestoreService.db, 'users', user.uid);
        const userInfoSnapshot = await getDoc(docRef);

        if (!userInfoSnapshot.exists()) return;

        const userData = userInfoSnapshot.data() as unknown as TUserInfo;
        setUserInfo(userData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  return { userInfo };
};

export default useGetUserInfo;
