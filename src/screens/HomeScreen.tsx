import React, { useEffect } from 'react';
import { Button, SafeAreaView } from 'react-native';
import UserList from '../components/UserList';
import { useUser } from '../context/UserContext';

const HomeScreen: React.FC = () => {
  const { users, fetchUsers } = useUser();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <SafeAreaView>
      <Button title="Fetch Users" onPress={fetchUsers} />
      <UserList users={users} />
    </SafeAreaView>
  );
};

export default HomeScreen;
