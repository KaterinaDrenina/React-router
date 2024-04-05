import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/Api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetchData(url).then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <Link to={`/user/${user.id}/albums`}>Albums</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
