import db from '../models/index'
import authService from "./authService";
import apiService from "./apiService";

const getListUser = async (page, limit) => {
    try {
        const offset = (page - 1) * limit
        const {count, rows} = await db.users.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "email", "username", "userAvatar", "gender", "birthday", "phoneNumber", "isCustomer", "createdAt", "updatedAt"],
        })
        console.log(rows)
        if (rows) {
            const totalPage = Math.ceil(count/limit)
            const data = {
                totalRows: count,
                totalPages: totalPage,
                users: rows
            }
            return {
                status: 'success',
                message: '',
                code: '200',
                data: data
            }
        } else {
            return {
                status: 'failed',
                message: 'Data Available',
                code: '204',
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
const createNewUser = async (email, password, username, userAvatar, gender, birthday, phoneNumber, isCustomer) => {
    try {
        // check email exists
        let isExists = await authService.checkEmailExists(email);
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

        await db.users.create({
            username: username,
            password: hashPassword,
            email: email,
            userAvatar: userAvatar,
            gender: gender || null,
            birthday: birthday || null,
            phoneNumber: phoneNumber,
            isCustomer: isCustomer,
            verificationToken: authService.createToken(64),
            verificationCreatedAt: apiService.formatDate(new Date)
        });
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
const deleteUser = async (userId) => {
    try {
        const user = await findUser(userId);
        if (user) {
            await db.users.destroy({
                where: {
                    id: userId
                }
            });
            return {
                status: 'success',
                message: 'Delete success',
                code: '200',
                data: []
            }
        }
        return {
            status: 'failed',
            message: 'User not found',
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
const detailUser = async (userId) => {
    try {
        const user = await findUser(userId);
        if (user) {
            return {
                status: 'success',
                message: '',
                code: '200',
                data: user
            }
        }
        return {
            status: 'failed',
            message: 'User not found',
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

const updateUser = async (userId, password, username) => {
    try {
        const user = await findUser(userId);
        if (user) {
            const hashPassword = apiService.bcryptPassword(password)
            await db.users.update(
                {
                    password: hashPassword,
                    username: username
                },
                {
                    where: {
                        id: userId
                    }
                });
            return {
                status: 'success',
                message: 'Update user is successfully',
                code: '200',
                data: []
            }
        }
        return {
            status: 'failed',
            message: 'User not found',
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
const findUser = async (userId) => {
    return await db.users.findOne({
        where: {
            id: userId
        },
        raw: true,
        nest: true,
        include: db.roles
    })
}
module.exports = {
    getListUser, createNewUser, deleteUser, detailUser, updateUser,
}