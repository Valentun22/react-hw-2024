import React from "react";
import {useAppPostSelector} from "../redux/slices/store/store";
import PostComponent from "./PostComponent";


const PostsComponent = () => {
    let {posts, isLoaded} = useAppPostSelector(useAppPostSelector => useAppPostSelector.postSlice);
    return (
        <div>
            {
                isLoaded ? posts.map(post => <PostComponent key={post.id} post={post}/>)
:
    <h3>loading ...</h3>
}
    </div>
);
};

export default PostsComponent;