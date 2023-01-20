import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

interface AuthParams {
  username: string;
  password: string;
}

class FirebaseAuth {
  auth: Auth;

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
  }

  authenticate(params: AuthParams): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this.auth,
      params.username,
      params.password
    );
  }
}

export default FirebaseAuth;
