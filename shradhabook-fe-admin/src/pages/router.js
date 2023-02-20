import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import pagesData from "./pagesData";

const Router = () => {
    const RecursiveRouter = (data) => {
        return (
            data.map(({component, isIndex, path, title, isPublic, children}, index) => {
                return (component) ? <Route key={index} index={isIndex} path={path} element={
                        !isPublic ?
                            <PrivateRoute>
                                <Suspense fallback={<div>Loading...</div>}>
                                    {component}
                                </Suspense>
                            </PrivateRoute> :
                            <Suspense fallback={<div>Loading...</div>}>
                                {component}
                            </Suspense>}>
                        {(children && children.length > 0) && RecursiveRouter(children)}
                    </Route> :
                    <Route key={index} index={isIndex} path={path}>
                        {(children && children.length > 0) && RecursiveRouter(children)}
                    </Route>
            })
        )
    }

    return <Routes>
        <Route path={'/'}>
            <Route path={'admin'}>
                {RecursiveRouter(pagesData)}
            </Route>
        </Route>
    </Routes>;
};

export default Router;