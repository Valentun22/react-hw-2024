import {RouteObject} from "react-router";
import App from "../App";
import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

const routes : RouteObject[] = [
    {path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path:'posts/:id', element:<PostPage/>}
        ]}
]
export const router = createBrowserRouter(routes);