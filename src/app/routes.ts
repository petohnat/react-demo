import {ConnectedComponent} from "react-redux";
import {RouteConfig, RouteConfigComponentProps} from "react-router-config";
import LoginUI from "ui/organism/Login/Login";
import MasterpieceUI from "ui/organism/Masterpiece/MasterPiece";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

// redefine name to be string | number
export type connectedComponentRouteConfig = Merge<RouteConfig, {
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | ConnectedComponent<any, any>;
}>;

export const ROUTE = {
    HOME: "/",
    LOGIN: "/login",
    LANGUAGE: "/language",
    MASTERPIECE: "/masterpiece",
};

export const routes: connectedComponentRouteConfig[] = [
    {
        path: ROUTE.HOME,
        exact: true,
        component: LoginUI,
    },
    {
        path: ROUTE.LOGIN,
        exact: true,
        component: LoginUI,
    },
];

export const protectedRoutes: connectedComponentRouteConfig[] = [
    {
        path: ROUTE.MASTERPIECE,
        exact: true,
        component: MasterpieceUI,
    },
];
