import authService from '../../services/authService'

const handleRegister = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const username = request.body.username
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
    const result = await authService.registerUser(email, password, username)

    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: [],
    })
}

const handleLogin = async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    if (!email || !password) {
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
    const result = await authService.loginUser(email, password)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}
const handleVerification = async (request, response) => {
    const userId = request.params.id
    const verificationToken = request.params.verificationToken
    if (!userId || !verificationToken) {
        return response.status(400).json({
            status: 'failed',
            message: 'Missing required parameters',
            code: '422',
            data: []
        })
    }
    const result = await authService.verificationToken(userId, verificationToken)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}
const handleSendEmailVerification = async (request, response) => {
    const email = request.body.email
    if (!email) {
        return response.status(400).json({
            status: 'failed',
            message: 'Missing required parameters',
            code: '422',
            data: []
        })
    }
    const result = await authService.sendEmailAuthentication(email)
    return response.status(200).json({
        status: result.status,
        message: result.message,
        code: result.code,
        data: result.data,
    })
}
module.exports = {
    handleRegister,
    handleLogin,
    handleVerification,
    handleSendEmailVerification
}