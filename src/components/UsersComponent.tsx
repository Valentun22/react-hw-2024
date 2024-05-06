import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {userApiService} from "../services/api.service";
import UserComponent from "../components/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>)}
        </div>
    );
};

export default UsersComponent;