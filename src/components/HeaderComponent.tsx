import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to={'/'}>Home Page</Link>
            <hr/>
            <Link to={'users'}>Users</Link>
            <hr/>
            <Link to={'/posts'}>Posts</Link>
            <hr/>
            <Link to={'/comments'}>Comments</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;