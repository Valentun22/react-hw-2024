import React from "react";
import {Link} from "react-router-dom";
const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>User Page</Link></li>
                <li><Link to={'posts'}>Posts Page</Link></li>
                <li><Link to={'comments'}>Comments Page</Link></li>
                <li><Link to={'userPosts'}>Users with posts Page</Link></li>
                <li><Link to={'postsComments'}>Posts with comments Page</Link></li>
            </ul>

        </div>
    );
};
export default HeaderComponent;