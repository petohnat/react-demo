import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({component: Component, user: User, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => User.isLogged ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
            }
        />
    );
}
