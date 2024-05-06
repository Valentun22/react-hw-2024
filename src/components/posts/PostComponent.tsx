import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";


interface IProps { post:IPostModel }
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div className={'postAll'} >
           <div className={'postBlock'}>
               <li>Post # {post.id}, {post.title}, {post.body}</li>
           </div>
        </div>
    );
};
export default PostComponent;