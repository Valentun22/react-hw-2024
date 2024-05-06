import React from 'react';
import {useAppUserSelector} from "../redux/slices/store/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    let {users, isLoaded} = useAppUserSelector(useAppUserSelector => useAppUserSelector.userSlice);
    return (
        <div>
            {
                isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default UsersComponent;