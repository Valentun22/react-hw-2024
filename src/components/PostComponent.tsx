import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
interface IProps{
    post: IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <h2>ID: {post.id}</h2>
                <li>Title:{post.title}</li>
                <br/>


                <button onClick={() => {
                    navigate(`${post.id}`)
                }}>details
                </button>
            </ul>
        </div>
    );
};

export default PostComponent;