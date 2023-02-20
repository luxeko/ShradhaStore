import {lazy} from "react";

// ======= Auth =======
const LoginPage = lazy(() => import("./Login/Login"))
const NotFound = lazy(() => import("../components/Error/404"))

// ======= Manage =======
const LayoutPage = lazy(() => import("../components/Layout/Layout"))
const HomePage = lazy(() => import("./Home/HomePage"))
const ListUserPage = lazy(() => import("./Users/ListUser"))
const DetailUserPage = lazy(() => import("./Users/DetailUser"))
const CreateUserPage = lazy(() => import("./Users/CreateUser"))
const EditUserPage = lazy(() => import("./Users/UpdateUser"))

const pagesData = [
    {
        path: "",
        title: "",
        isIndex: false,
        isPublic: false,
        component: <LayoutPage/>,
        children: [
            {
                path: "",
                title: "Dashboard",
                isIndex: true,
                isPublic: false,
                component: <HomePage/>,
            },
            {
                path: "users",
                title: 'Users',
                isIndex: false,
                isPublic: false,
                children: [
                    {
                        path: "",
                        title: "List user",
                        isIndex: true,
                        isPublic: false,
                        component: <ListUserPage/>,
                    },
                    {
                        path: "create",
                        title: "Create user",
                        isIndex: false,
                        isPublic: false,
                    },
                    {
                        path: "add",
                        title: "Add user",
                        isIndex: false,
                        isPublic: false,
                        component: <CreateUserPage/>,
                    },
                    {
                        path: "detail/:id",
                        title: "Detail user",
                        isIndex: false,
                        isPublic: false,
                        component: <DetailUserPage/>,
                    },
                    {
                        path: "delete/:id",
                        title: "Delete user",
                        isIndex: false,
                        isPublic: false,
                    },
                    {
                        path: "edit/:id",
                        title: "Edit user",
                        isIndex: false,
                        isPublic: false,
                        component: <EditUserPage/>
                    },
                    {
                        path: "update/:id",
                        title: "Update user",
                        isIndex: false,
                        isPublic: false,
                        component: <CreateUserPage/>,
                    },
                ]
            },
        ]
    },
    {
        path: "*",
        title: "404 Error",
        isIndex: false,
        isPublic: true,
        component: <NotFound/>,
    },
    {
        path: "login",
        title: "Login",
        isIndex: false,
        isPublic: true,
        component: <LoginPage/>,
    },
]

export default pagesData