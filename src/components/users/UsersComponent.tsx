import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/usersService/users.api.service";
import UserComponent from "../user/UserComponent";
import { getPostsOfCurrentUser} from "../../services/postsService/posts.api.service";
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../posts/PostComponent";
const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [selectedUserId, setSelectedUserId] = useState(0)
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users))
    },[])

    useEffect(() => {
        if (selectedUserId !== 0) {
            getPostsOfCurrentUser(selectedUserId).then(({data}) => setPosts(data.posts))
        }
    },[selectedUserId])

    const onSelectUser = (userId:number) => { setSelectedUserId(userId)}

    return (
        <div className={'componentFlex'} >
            <div>
                {users.map((user) => <UserComponent key={user.id} user={user} onSelectUser={onSelectUser} />)}
            </div>
            <div>
                {posts.map((post) => <PostComponent key={post.id} post={post} />)}
            </div>
        </div>
    );
};
export default UsersComponent;