import express from "express";
import userController from "../controllers/Admin/userController"
const router = express.Router();

/**
 *
 * @param {*} app : express app
 * */
const initWebRoutes = (app) => {

    router.get("/", (request, response) => {
        return response.send("Hello word");
    })
    router.get("/user/show", userController.handleGetListUser)
    router.post("/user/create", userController.handleCreateUser)
    router.delete("/user/delete/:id", userController.handleDeleteUser)

    return app.use('/', router);
}

export default initWebRoutes;