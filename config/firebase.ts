import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'nexalt-7910a.firebaseapp.com',
  projectId: 'nexalt-7910a',
  storageBucket: 'nexalt-7910a.appspot.com',
  messagingSenderId: '48625670140',
  appId: '1:48625670140:web:f4270069c1d08a089f8479',
  measurementId: 'G-9FE31PD7RX',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
