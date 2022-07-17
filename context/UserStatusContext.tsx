import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';

const UserStatusContext = createContext<any>({});

export const useStatusUser = () => useContext(UserStatusContext);

export const UserStatusContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userStatus, setUserStatus] = useState<any | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const getUserStatus = async () => {
        const result = await fetch(`/api/user_status/${user.email}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const response = await result.json();

        if (response.length === 0) {
          setUserStatus(null);
        } else {
          setUserStatus(response[0].usertypeselected);
        }
      };
      try {
        getUserStatus();
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      setUserStatus(null);
    }
  }, [user]);

  const userStatusValue = useMemo(
    () => ({
      userStatus,
    }),
    [userStatus]
  );

  return (
    <UserStatusContext.Provider value={userStatusValue}>
      {children}
    </UserStatusContext.Provider>
  );
};
