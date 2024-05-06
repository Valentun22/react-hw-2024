import React, {useEffect} from 'react';
import {useAppPostDispatch} from "../redux/slices/store/store";
import {postActions} from "../redux/slices/postSlice";
import PostsComponent from "../components/PostsComponents";


const PostsPage = () => {
    let dispatch = useAppPostDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());

    }, []);
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;