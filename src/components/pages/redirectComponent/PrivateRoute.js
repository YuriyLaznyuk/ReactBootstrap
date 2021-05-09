import React from 'react';
import {Redirect, Route, useLocation} from 'react-router-dom';
import {fakeAuth} from "./AdminLogin";

function PrivateRoute({component: Component, ...rest}) {
    const location = useLocation();
    return (
        <Route {...rest}>
            {fakeAuth.isAuthenticated ?
                <Component/> :
                <Redirect to={{
                    pathname: "/adminLogin",
                    state: {from: location}
                }}/>}
        </Route>
    );
}

export default PrivateRoute;