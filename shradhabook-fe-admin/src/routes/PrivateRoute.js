import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function PrivateRoute(props) {
    // const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const isAuthenticated = true
    if(!isAuthenticated) {
        return <Navigate to={'login'}></Navigate>
    }
    return (
        <>
            {props.children}
        </>
    );
}

export default PrivateRoute;