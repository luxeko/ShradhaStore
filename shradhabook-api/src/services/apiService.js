const db = require("../models");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
const checkPasswordLogin = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword)
}
const formatDate = (date) => {
    return (
        [
            date.getFullYear(),
            (date.getMonth() + 1).toString().padStart(2, '0'),
            (date.getDate()).toString().padStart(2, '0'),
        ].join('-') +
        ' ' +
        [
            (date.getHours()).toString().padStart(2, '0'),
            (date.getMinutes()).toString().padStart(2, '0'),
            (date.getSeconds()).toString().padStart(2, '0'),
        ].join(':')
    );
}

module.exports = {
    bcryptPassword,
    formatDate,
    checkPasswordLogin,
}