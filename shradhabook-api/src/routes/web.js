import express from "express";
const router = express.Router();

// /**
//  *
//  * @param {*} app : express app
//  * */
const initWebRoutes = (app) => {
    return app.use('/', router);
}

export default initWebRoutes;