import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostsWithCommentsType} from "../models/PostWithCommentsType";


const PostsCommentsComponents = () => {
    const {commentStore: {allComments}, postStore: {allPosts}} = useContextProvider();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostsWithCommentsType[]>([]);

    const postsWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comment: allComments.filter(comment => comment.postId === comment.id)};
            });
        }
    }, [allComments, allPosts]);

    useEffect(() => {
        setPostsWithCommentsState(postsWithCommentsArray);
    }, [postsWithCommentsArray]);


    return (
        <div>
            {
                postsWithCommentsState.map(post => <div key={post.id}>
                    <div>
                        <h4>User id - {post.userId} </h4>
                        <ul>
                        <h4>Post : "{post.body}"</h4>
                            <li>
                               {post.title}
                            </li>
                        </ul>
                    </div>
                    <ul>
                        {
                        post.comment.map(comment =>
                          <li key={comment.id}>
                              <h3>email - {comment.email}</h3>
                              <h4>Name - {comment.name}</h4>
                              <h4>Body comment : {comment.body}</h4>
                          </li>)
                        }
                    </ul>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default PostsCommentsComponents;