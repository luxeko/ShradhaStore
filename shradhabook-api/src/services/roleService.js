import bcrypt from "bcryptjs";
import db from '../models/index'
import {test} from "../configs/config";

const getListRole = async () => {
    try {
        return await db.roles.findAll();
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const createNewRole = async (roleName, description, createdBy) => {
    try {
        await db.roles.create({
            roleName: roleName,
            description: description,
            createdBy: createdBy
        });
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const deleteRole = async (roleId) => {
    try {
        await db.roles.destroy({
            where: {
                id: roleId
            }
        });
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const editRole = async (roleId) => {
    try {
        let testRole = await db.roles.findOne({
            where: {
                id: roleId
            },
            attributes: ["id", "roleName", "description", "createdBy"],
            raw: true,
            nest: true
        })
        testRole.user = await db.users.findOne({
            where: {
                id: testRole.createdBy
            },
            raw: true,
            nest: true
        })

        console.log(testRole)
        // return await db.roles.findOne({
        //     where: {
        //         id: roleId
        //     },
        //     // include: {model: db.users}
        // })
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
//
// const updateUser = async (userId, email, password, username) => {
//     const hashPassword = bcryptPassword(password)
//     try {
//         await db.users.update(
//             {
//                 email: email,
//                 password: hashPassword,
//                 username: username
//             },
//             {
//                 where: {
//                     id: userId
//                 }
//             });
//     } catch (error) {
//         console.log("=> check error: ", error)
//     }
// }
module.exports = {
    getListRole, createNewRole, deleteRole, editRole
}