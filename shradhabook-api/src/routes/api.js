import express from "express";
import authController from "../controllers/Admin/authController"
import userController from "../controllers/Admin/userController"
import roleController from "../controllers/Admin/roleController"
const router = express.Router();

const initApiRoutes = (app) => {
    // authenticate
    router.post("/register", authController.handleRegister)
    router.post("/login", authController.handleLogin)
    router.post("/sendEmailVerification", authController.handleSendEmailVerification)
    router.put("/verification/user/:id/:verificationToken", authController.handleVerification)
    router.post("/user/reset-password/:id")
    // ===== ADMIN - API =====
    // user
    router.get("/users", userController.index)
    router.post("/users/create", userController.create)
    router.get("/users/detail", userController.read)
    router.put("/users/update", userController.update)
    router.delete("/users/delete", userController.destroy)
    // role
    router.get("/roles", roleController.index)
    router.post("/roles/create", roleController.create)
    router.get("/roles/detail", roleController.read)
    router.put("/roles/update", roleController.update)
    router.delete("/roles/delete", roleController.destroy)

    // ===== CUSTOMER - API =====

    return app.use('/api', router);
}

export default initApiRoutes;