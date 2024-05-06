import React, {useEffect} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useAppUserDispatch} from "../redux/slices/store/store";
import {userActions} from "../redux/slices/userSlice";

const UsersPage = () => {

    let dispatch = useAppUserDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;