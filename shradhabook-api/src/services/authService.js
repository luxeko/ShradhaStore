import db from "../models";
import apiService from '../services/apiService'

const registerUser = async (email, password, username) => {
    try {
        // check email exists
        let isExists = await checkEmailExists(email);
        if (isExists) {
            return {
                status: 'failed',
                message: 'Email is already exists!',
                code: '409',
                data: []
            }
        }
        /// hash password
        const hashPassword = apiService.bcryptPassword(password)

        let result = await db.users.create(
            {
                username: username,
                password: hashPassword,
                email: email,
                verificationCreatedAt: apiService.formatDate(new Date)
            });
        const userId = result.get({plain: true}).id
        createUrlVerificationToken(userId)
        return {
            status: 'success',
            message: 'Create new user is successfully',
            code: '200',
            data: []
        }
    } catch (error) {
        console.log("=> check error: ", error)
        return {
            status: 'failed',
            message: 'Something wrong !!!',
            code: '500',
            data: []
        }
    }
}

const loginUser = async (email, password) => {
    try {
        let user = await db.users.findOne({
            where: {email: email},
            attributes: ["id", "password", "username", "userAvatar", "gender", "birthday", "phoneNumber", "isCustomer", "tokenCreatedAt", "tokenExpires", "refreshToken", "verificationToken"],
            raw: true
        })
        if (user) {
            if (user.verificationToken) {
                const hashPassword = user.password
                const checkPassword = apiService.checkPasswordLogin(password, hashPassword)
                if (checkPassword) {
                    return {
                        status: 'success',
                        message: 'Login is successfully',
                        code: '200',
                        data: user
                    }
                }
            }
            return {
                status: 'failed',
                message: 'You need to verify your account',
                code: '401',
                data: []
            }
        } else {
            return {
                status: 'failed',
                message: 'Email or password is incorrect',
                code: '400',
                data: []
            }
        }
    } catch (error) {
        console.log("=> check error: ", error)
        return {
            status: 'failed',
            message: 'Something wrong !!!',
            code: '500',
            data: []
        }
    }
}
const verificationToken = async (userId, verificationToken) => {
    try {
        const user = await db.users.findOne({
            where: {
                id: userId
            },
            raw: true,
            nest: true,
            attributes: ['verificationToken', 'verificationCreatedAt'],
        })
        const timeToken = user.verificationCreatedAt;
        const minus = Math.abs(new Date - timeToken);
        if (minus < 120000) {
            if (!user.verificationToken) {
                await db.users.update(
                    {
                        verificationToken: verificationToken,
                    },
                    {
                        where: {
                            id: userId
                        }
                    });
                return {
                    status: 'success',
                    message: 'Successful user authentication',
                    code: '200',
                    data: []
                }
            }
            return {
                status: 'failed',
                message: 'User authenticated',
                code: '403',
                data: []
            }
        }
        return {
            status: 'failed',
            message: 'Authentication time has expired',
            code: '408',
            data: []
        }
    } catch (error) {
        console.log("=> check error: ", error)
        return {
            status: 'failed',
            message: 'Something wrong !!!',
            code: '500',
            data: []
        }
    }
}
const checkEmailExists = async (email) => {
    try {
        return await db.users.findOne({
            where: {
                email: email
            },
            attributes: ["id"]
        })
    } catch (error) {
        console.log("=> check error: ", error)
        return {
            status: 'failed',
            message: 'Something wrong !!!',
            code: '500',
            data: []
        }
    }
}

const sendEmailAuthentication = async (email) => {
    try {
        const getUser = await db.users.findOne({
            where: {
                email: email
            },
            attributes: ['id', 'verificationToken'],
            raw: true,
            nest: true
        })
        createUrlVerificationToken(getUser.id)
        if (!getUser.verificationToken) {
            await db.users.update(
                {
                    verificationCreatedAt: apiService.formatDate(new Date),
                },
                {
                    where: {
                        email: email
                    }
                });
            return {
                status: 'success',
                message: 'Email has been sent',
                code: '200',
                data: []
            }
        }
        return {
            status: 'failed',
            message: 'User authenticated',
            code: '403',
            data: []
        }
    } catch (error) {
        console.log("=> check error: ", error)
        return {
            status: 'failed',
            message: 'Something wrong !!!',
            code: '500',
            data: []
        }
    }
}
const createToken = (size) => {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}
const createRefreshToken = () => {

}
const createJWT = () => {

}
const createUrlVerificationToken = (id) => {
    const verificationToken = createToken(64)
    return `http://localhost:8080/api/verification/user/${id}/${verificationToken}`
}

module.exports = {
    registerUser,
    loginUser,
    verificationToken,
    checkEmailExists,
    createToken,
    createRefreshToken,
    createJWT,
    sendEmailAuthentication
}