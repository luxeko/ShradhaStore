import userService from '../../services/userService'
import {request, response} from "express";

const handleGetListUser = async (request, response) => {
    const users = await userService.getListUser();
    return response.render("user.ejs", {users});
}
const handleCreateUser = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const username = request.body.username
    await userService.createNewUser(email, password, username)
    return response.redirect("/users");
};
const handleDeleteUser = async (request, response) => {
    await userService.deleteUser(request.params.id)
    return response.redirect("/users");
}
const handleEditUser = async (request, response) => {
    const user = await userService.editUser(request.params.id)
    let userData = {}
    if (user && user.length > 0) {
        userData = user[0];
    }
    return response.render("user-update.ejs", {userData});
}
const handleUpdateUser = async (request, response) => {
    const userId = request.params.id
    const email = request.body.email
    const password = request.body.password
    const username = request.body.username
    await userService.updateUser(userId, email, password, username)
    return response.redirect("/users");
}
module.exports = {
    handleGetListUser,
    handleCreateUser,
    handleDeleteUser,
    handleEditUser,
    handleUpdateUser
}