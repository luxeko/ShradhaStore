import {lazy} from "react";

// ======= Auth =======
const LoginPage = lazy(() => import("./Login/Login"))
const NotFound = lazy(() => import("../components/Error/404"))

// ======= Manage =======
const LayoutPage = lazy(() => import("../components/Layout/Layout"))
const HomePage = lazy(() => import("./Home/HomePage"))

// ======= USER-PAGE =======
const ListUserPage = lazy(() => import("./Users/ListUser"))
const DetailUserPage = lazy(() => import("./Users/DetailUser"))
const CreateUserPage = lazy(() => import("./Users/CreateUser"))
const EditUserPage = lazy(() => import("./Users/EditUser"))

// ======= CATEGORY-PAGE =======
const ListCategoryPage = lazy(() => import("./Categories/ListCategory"))
const CreateCategoryPage = lazy(() => import("./Categories/CreateCategory"))
const EditCategoryPage = lazy(() => import("./Categories/EditCategory"))

// ======= PRODUCT-PAGE =======
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
                        path: "add",
                        title: "Add user",
                        isIndex: false,
                        isPublic: false,
                        component: <CreateUserPage/>,
                    },
                    {
                        path: "create",
                        title: "Create user",
                        isIndex: false,
                        isPublic: false,
                    },
                    {
                        path: "detail/:id",
                        title: "Detail user",
                        isIndex: false,
                        isPublic: false,
                        component: <DetailUserPage/>,
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
                    },
                    {
                        path: "delete/:id",
                        title: "Delete user",
                        isIndex: false,
                        isPublic: false,
                    },
                ]
            },
            {
                path: "categories",
                title: "Categories",
                isIndex: false,
                isPublic: false,
                children: [
                    {
                        path: "",
                        title: "List category",
                        isIndex: true,
                        isPublic: false,
                        component: <ListCategoryPage/>,
                    },
                    {
                        path: "add",
                        title: "Add category",
                        isIndex: false,
                        isPublic: false,
                        component: <CreateCategoryPage/>,
                    },
                    {
                        path: "create",
                        title: "Create category",
                        isIndex: false,
                        isPublic: false,
                    },
                    {
                        path: "detail/:id",
                        title: "Detail category",
                        isIndex: false,
                        isPublic: false,
                        // component: <DetailUserPage/>,
                    },
                    {
                        path: "edit/:id",
                        title: "Edit category",
                        isIndex: false,
                        isPublic: false,
                        component: <EditCategoryPage/>
                    },
                    {
                        path: "update/:id",
                        title: "Update category",
                        isIndex: false,
                        isPublic: false,
                    },
                    {
                        path: "delete/:id",
                        title: "Delete category",
                        isIndex: false,
                        isPublic: false,
                    },
                ]
            }
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