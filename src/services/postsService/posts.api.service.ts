import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: { 'Content-Type': 'application/json' }
})

type PostsResponse = AxiosResponse< {posts: IPostModel[]}>
const getPostsOfCurrentUser = (userId:number):Promise<PostsResponse> => {
    return   axiosInstance.get(userId+'/posts')
}

export { getPostsOfCurrentUser }