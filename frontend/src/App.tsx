import React, { useEffect, useState } from 'react';
import { User } from './components/User';
import { api } from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get<IUser[]>('/users');

      setUsers(response.data);
    }

    getUsers();
  }, []);

  return (
    <div className="App">
      {
        users.map(user => (
          <User user={user} key={user.email}/>
        ))
      }
    </div>
  );
}

export default App;
