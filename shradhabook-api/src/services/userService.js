import bcrypt from "bcryptjs";
import mysql2 from "mysql2/promise";
import bluebird from "bluebird"

const salt = bcrypt.genSaltSync(10);

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
const getListUser = async () => {
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: 'shradhabook_db',
        Promise: bluebird
    })
    try {
        const [rows, fields] = await connection.execute(`SELECT * FROM users`);
        return rows;
    } catch (error) {
        console.log("=> check error: ", error)
    }

}
const createNewUser = async (email, password, username) => {
    const hashPassword = bcryptPassword(password)
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: 'shradhabook_db',
        Promise: bluebird
    })
    try {
        const [rows, fields] = await connection.execute(
            `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`,
            [email, hashPassword, username]);
        return rows
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const detailUser = async (userId) => {

}
const deleteUser = async (userId) => {
    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: 'shradhabook_db',
        Promise: bluebird
    })
    try {
        const [rows, fields] = await connection.execute(
            `DELETE FROM users WHERE id=?`,
            [userId]);
        return rows
    } catch (error) {
        console.log("=> check error: ", error)
    }
}
const updateUser = async (userId) => {

}
module.exports = {
    getListUser, createNewUser, deleteUser
}