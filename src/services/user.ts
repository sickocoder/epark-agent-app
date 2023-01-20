import { FirebaseApp } from 'firebase/app';
import { Auth, getAuth, updateProfile } from 'firebase/auth';

interface UpdateUserProfileParams {
  displayName: string;
  photoURL: string;
}

class FirebaseUserService {
  auth: Auth;

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
  }

  updateProfile(params: UpdateUserProfileParams) {
    return updateProfile(this.auth.currentUser, params);
  }
}

export default FirebaseUserService;
