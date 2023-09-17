import roleService from '../../services/roleService'

const index = async (request, response) => {
    const roles = await roleService.getListRole();
    return response.render("role.ejs", {roles});
}
const create = async (request, response) => {
    const roleName = request.body.name
    const description = request.body.description
    const createdBy = request.body.createdBy
    await roleService.createNewRole(roleName, description, createdBy)
    return response.redirect("/roles");
};
const destroy = async (request, response) => {
    await roleService.deleteRole(request.params.id)
    return response.redirect("/roles");
}
const read = async (request, response) => {
    const role = await roleService.editRole(request.params.id)
    return response.redirect("/roles");
}
const update = async (request, response) => {

}
module.exports = {
    index,
    create,
    destroy,
    read,
    update
}