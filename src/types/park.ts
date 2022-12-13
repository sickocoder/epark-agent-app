import firebase from 'firebase/compat';
import { Timestamp } from 'firebase/firestore';
import DocumentReference = firebase.firestore.DocumentReference;

export interface TParkItem {
  path: string;
  id: string;
  slotId: string;
  isAvailabel: true;
  mobil: DocumentReference;
  name: 'Slot A';
  park: string;
}

export interface TMobile {
  id: string;
  enterTime: Timestamp;
  licensePlate: string;
  licenseRegistrationNumber: string;
  ownerName: string;
  type: string;
}
