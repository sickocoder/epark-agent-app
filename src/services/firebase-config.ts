// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD934PijvfE8-JrzDo-_6musL2kC94ceT8',
  authDomain: 'e-park-3e6e5.firebaseapp.com',
  projectId: 'e-park-3e6e5',
  storageBucket: 'e-park-3e6e5.appspot.com',
  messagingSenderId: '14900022220',
  appId: '1:14900022220:web:542bdfc90b71374a616b69',
};

// Initialize Firebase
// eslint-disable-next-line import/prefer-default-export
export const firebaseService = initializeApp(firebaseConfig);
