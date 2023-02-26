import express from "express";
import userController from "../controllers/Admin/userController"

const router = express.Router();

/**
 *
 * @param {*} app : express app
 * */
const initWebRoutes = (app) => {
    router.get("/users", userController.handleGetListUser)
    router.post("/users/create", userController.handleCreateUser)
    router.post("/users/delete/:id", userController.handleDeleteUser)
    router.get("/users/edit/:id", userController.handleEditUser)
    router.post("/users/update/:id", userController.handleUpdateUser)

    return app.use('/', router);
}

export default initWebRoutes;