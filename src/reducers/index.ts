import {combineReducers} from "redux";
import applicationReducer from "ui/organism/App/reducer";
import dashboardReducer from "ui/organism/Dashboard/reducer";
import userReducer from "service/User/reducer";
import {IState as AppState, NAMESPACE as APP_NAMESPACE} from "ui/organism/App/state";
import {IState as DashboardState, NAMESPACE as DASHBOARD_NAMESPACE} from "ui/organism/Dashboard/state";
import {IState as UserState, NAMESPACE as USER_NAMESPACE} from "service/User/state";

export interface State {
    [APP_NAMESPACE]: AppState;
    [DASHBOARD_NAMESPACE]: DashboardState;
    [USER_NAMESPACE]: UserState;
}

export const rootReducer = combineReducers<State>({
    [APP_NAMESPACE]: applicationReducer,
    [DASHBOARD_NAMESPACE]: dashboardReducer,
    [USER_NAMESPACE]: userReducer,
});
