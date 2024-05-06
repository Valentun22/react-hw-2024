import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type PostsWithCommentsType = IPostModel & { comment: ICommentModel[] }