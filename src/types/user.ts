import { DocumentReference } from 'firebase/firestore';

export interface TUser {
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: string;
  photoURL: string;
}

export interface TUserInfo {
  avatar: string;
  displayName: string;
  locationName: string;
  locationReference: string;
  phone: string;
}
