import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/users.json`)
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.first_name}</li>
            )
        }
      </ul>
    );
  }
}