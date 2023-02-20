import userService from '../../services/userService'

const handleGetListUser = async (request, response) => {
    const users = await userService.getListUser();
    console.log(">>> users: ", users)
    return response.render("home.ejs", {users});
}
const handleCreateUser = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const username = request.body.username
    await userService.createNewUser(email,password,username)
    return response.redirect("/user/show");
};
const handleDeleteUser = async (request, response) => {
    await userService.deleteUser(request.params.id)
    return response.redirect("/user/show");
}
module.exports = {
    handleGetListUser,
    handleCreateUser,
    handleDeleteUser
}