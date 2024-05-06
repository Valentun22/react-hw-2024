import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>{comment.id} {comment.name}</h3>
            <ul>
                <li>{comment.body}</li>
            </ul>
            <h4>{comment.email}</h4>
            <hr/>
        </div>
    );
};

export default CommentComponent;