import createReducer from 'redux-create-fsa-reducer';
import Action from './action';
import { DEFAULT_STATE, IState } from './state';

export default createReducer(DEFAULT_STATE, {
    [Action.INIT_APP_VERSION](
        state: IState,
        version: string,
    ): IState {
        return {
            ...state,
            appVersion: version,
        };
    },
    [Action.SET_APP_LANGUAGE](
        state: IState,
        appLanguage: string,
    ): IState {
        return {
            ...state,
            localizationLanguage: appLanguage,
        };
    },

    [Action.SET_LOADING](state: IState): IState {
        console.log("nastavujem loading");
        return state;
    },
});