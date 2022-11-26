import { FirebaseAuthService } from '../services';
import { firebaseService } from '../services/firebase-config';

// eslint-disable-next-line import/prefer-default-export
export const makeFirebaseAuthService = () =>
  new FirebaseAuthService(firebaseService);
