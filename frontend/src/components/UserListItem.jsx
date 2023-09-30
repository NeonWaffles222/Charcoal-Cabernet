import React from 'react';

const UserListItem = (props) => {
  const { firstName, lastName } = props;

  return (
    <li>{firstName} {lastName}</li>
  );
};

export default UserListItem;