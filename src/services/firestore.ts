import { FirebaseApp } from 'firebase/app';
import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  Firestore,
  getDoc as getFirebaseDocument,
  getFirestore,
} from 'firebase/firestore';

class FirestoreService {
  db: Firestore;

  constructor(app: FirebaseApp) {
    this.db = getFirestore(app);
  }

  getCollection<T = DocumentData>(
    collectionPath: string
  ): CollectionReference<T> {
    const docReg = collection(this.db, collectionPath);

    return docReg as unknown as CollectionReference<T>;
  }

  async getDoc<T = DocumentData>(
    collectionPath: string,
    docPath: string
  ): Promise<DocumentData> {
    const docRef = doc(this.db, collectionPath, docPath);
    const docSnap = await getFirebaseDocument(docRef);

    return docSnap.data() as T;
  }
}

export default FirestoreService;
