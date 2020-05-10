import {FluxStandardAction} from 'flux-standard-action';
import {User, UserCredentials} from './state';

export type loginActionType = FluxStandardAction<string, UserCredentials>;

const Action = {
    LOGIN: "user.LOGIN",
    LOGOUT: "user.LOGOUT",
    RESET: "user.RESET",
    DETAIL_FETCH_DONE: "user.DETAIL_FETCH_DONE",
    SET_LAST_EVENT_MESSAGE: "user.SET_LAST_EVENT_MESSAGE",
    CLEAR_LAST_EVENT_MESSAGE: "user.CLEAR_LAST_EVENT_MESSAGE",

    userLogin(
        payload: {email: string, password: string},
    ): loginActionType {
        const action: any = {
            type: Action.LOGIN,
            payload: {
                email: payload.email,
                password: payload.password,
            },
        }; 
        
        return action as loginActionType;
    },    

    userLogout(): FluxStandardAction<string>  {
        const action: any = {
            type: Action.LOGOUT,
        };
        
        return action as FluxStandardAction<string>;
    },

    reset(): FluxStandardAction<string>  {
        const action: any = {
            type: Action.RESET,
        };
        
        return action as FluxStandardAction<string>;
    },

    userDetailFetchDone(
        payload: {user: User},
    ): FluxStandardAction<string, {user: User}> {
        const action: any = {
            type: Action.DETAIL_FETCH_DONE,
            payload: payload.user,
        }; 
        
        return action as FluxStandardAction<string, {user: User}>;
    },

    userSetLastEventMessage(payload: string): FluxStandardAction<string, string>  {
        const action: any = {
            payload,
            type: Action.SET_LAST_EVENT_MESSAGE,
        };

        return action as FluxStandardAction<string, string>;
    },

    userClearLastEventMessage(): FluxStandardAction<string>  {
        const action: any = {
            type: Action.CLEAR_LAST_EVENT_MESSAGE,
        };

        return action as FluxStandardAction<string>;
    },
};

export default Action;