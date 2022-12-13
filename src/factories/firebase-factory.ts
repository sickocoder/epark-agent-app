import { FirebaseAuthService } from '../services';
import { firebaseService } from '../services/firebase-config';
import FirestoreService from '../services/firestore';
import FirebaseUserService from '../services/user';

export const makeFirebaseAuthService = () =>
  new FirebaseAuthService(firebaseService);

export const makeFirebaseUserService = () =>
  new FirebaseUserService(firebaseService);

export const makeFirestoreService = () => new FirestoreService(firebaseService);
