import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../../models/IUserModel";

type UserResponse = AxiosResponse< {users: IUserModel[]}>

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: { 'Content-Type': 'application/json' }
})

const getAllUsers = (): Promise<UserResponse> => {
    return axiosInstance.get('')
}

export { getAllUsers }