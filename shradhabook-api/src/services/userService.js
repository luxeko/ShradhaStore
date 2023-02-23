import bcrypt from "bcryptjs";
import mysql2 from "mysql2/promise";
import bluebird from "bluebird"
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
const getListUser = async () => {
    try {
        const listUser = await db.users.findAll();
        return listUser;
    } catch (error) {
        console.log("=> check error: ", error)
    }

}
const createNewUser = async (email, password, username) => {
    const hashPassword = bcryptPassword(password)
    try {
        await db.users.create({
            username: username,
            password: hashPassword,
            email: email
        });
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const deleteUser = async (userId) => {
    try {
        await db.users.destroy({
            where: {
                id: userId
            }
        });
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const editUser = async (userId) => {
    try {
        const user = db.users.findAll({
            where: {
                id: userId
            }
        })
        return user
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const updateUser = async (userId, email, password, username) => {
    const hashPassword = bcryptPassword(password)
    try {
        await db.users.update(
            {
                email: email,
                password: hashPassword,
                username: username
            },
            {
                where: {
                    id: userId
                }
            });
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
module.exports = {
    getListUser, createNewUser, deleteUser, editUser, updateUser,
}