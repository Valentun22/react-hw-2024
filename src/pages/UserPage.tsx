import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppUserDispatch, useAppUserSelector} from "../redux/slices/store/store";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {
    let {id} = useParams();
    const dispatch = useAppUserDispatch();
    const {user} = useAppUserSelector(useAppUserSelector => useAppUserSelector.userSlice);
    useEffect(() => {
        dispatch(userActions.loadUserById(id));
    }, [id]);

    return (
        <div>
            { user && user.email }
        </div>
    );
};

export default UserPage;