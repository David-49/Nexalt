import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser({
          uid: _user.uid,
          email: _user.email,
          displayName: _user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  const firebaseProviderValue = useMemo(
    () => ({
      user,
      login,
      signup,
      logout,
      signInWithGoogle,
    }),
    [user, login, signup, logout, signInWithGoogle]
  );

  return (
    <AuthContext.Provider value={firebaseProviderValue}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
