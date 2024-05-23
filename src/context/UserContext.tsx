import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { User } from '../models/User';
import realm from '../storage/realm';

interface UserContextData {
  users: User[];
  fetchUsers: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      realm.write(() => {
        response.data.forEach(user => {
          realm.create('User', user);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const realmUsers = realm.objects<User>('User');
    setUsers(Array.from(realmUsers));
  }, []);

  return (
    <UserContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
