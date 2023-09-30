import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
  const users = props.users;
  const allUsers = users.map((user) => {
    return (
      <UserListItem
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
      />
    );
  });
  return (
    <ul>
      {allUsers}
    </ul>
  );
};

export default UserList;