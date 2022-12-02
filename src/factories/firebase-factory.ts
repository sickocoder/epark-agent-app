import { FirebaseAuthService } from '../services';
import { firebaseService } from '../services/firebase-config';
import FirebaseUserService from '../services/user';

export const makeFirebaseAuthService = () =>
  new FirebaseAuthService(firebaseService);

export const makeFirebaseUserService = () =>
  new FirebaseUserService(firebaseService);
