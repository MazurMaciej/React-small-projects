import React from 'react';
import './UserList.css'

const UsersList = (props) => {
    const users = props.users.map(user => (
        <li key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last}></img>
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </li>
    ))

    return (
        <ul className="users">
            {users}
        </ul>
    )
}
export default UsersList;