import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

const UserComponent: FC<IUserModel> = ({id, name, username, email}) => {
    return (
        <div>
            <h2>{id} - {name}</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};
export default UserComponent;