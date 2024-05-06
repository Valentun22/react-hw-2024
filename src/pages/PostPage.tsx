import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppPostDispatch, useAppPostSelector} from "../redux/slices/store/store";
import {postActions} from "../redux/slices/postSlice";


const PostPage = () => {
    let {id} = useParams();
    const dispatch = useAppPostDispatch();
    const {post} = useAppPostSelector(useAppPostSelector => useAppPostSelector.postSlice);
    useEffect(() => {
        dispatch(postActions.loadPostById(id));
    }, [id]);

    return (
        <div>
            <ul>
                <li>
                    <h2>Post id: {post && post.id}</h2>
                    <hr/>
                    <h4>Body: {post && post.body}</h4>
                    <hr/>
                    <h4>Title: {post && post.title}</h4>
                    <hr/>
                </li>
            </ul>
        </div>
    );
};

export default PostPage;