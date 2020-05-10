import createReducer from 'redux-create-fsa-reducer';
import Action from './action';
import { DEFAULT_STATE, IState, User } from './state';

export default createReducer(DEFAULT_STATE, {
    [Action.DETAIL_FETCH_DONE](
        state: IState,
        payload: User,
    ): IState {
        return {
            ...state,
            ...payload,
        };
    },
    [Action.RESET](): IState {
        return {
            ...DEFAULT_STATE,
        };
    },
});
