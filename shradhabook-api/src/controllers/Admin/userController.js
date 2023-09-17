import userService from '../../services/userService'

const index = async (request, response) => {
    const page = request.query["page"] || 1
    const limit = request.query["limit"] || 10
    const users = await userService.getListUser(+page, +limit);
    return response.status(200).json({
        status: users.status,
        message: users.message,
        code: users.code,
        data: users.data
    })
}
const create = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const username = request.body.username
    const userAvatar = request.body.userAvatar
    const gender = request.body.gender
    const birthday = request.body.birthday
    const phoneNumber = request.body.phoneNumber
    const isCustomer = request.body.isCustomer

    if (!email || !password || !username) {
        return response.status(400).json({
            status: 'failed',
            message: 'Missing required parameters',
            code: '422',
            data: []
        })
    }
    if (password && password.length < 4) {
        return response.status(400).json({
            status: 'failed',
            message: 'Your password must have more than 3 letter',
            code: '422',
            data: []
        })
    }
    const result = await userService.createNewUser(email, password, username, userAvatar, gender, birthday, phoneNumber, isCustomer)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
};

const destroy = async (request, response) => {
    const userId = request.body.id
    if (!userId) {
        return response.status(400).json({
            status: 'failed',
            message: 'Missing required parameters',
            code: '422',
            data: []
        })
    }
    let result = await userService.deleteUser(userId)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}
const read = async (request, response) => {
    const result = await userService.detailUser(request.body.id)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}
const update = async (request, response) => {
    const userId = request.body.id
    const username = request.body.username
    const password = request.body.password
    const result = await userService.updateUser(userId, password, username)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}

module.exports = {
    index,
    create,
    destroy,
    read,
    update,
}