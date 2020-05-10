import createReducer from "redux-create-fsa-reducer";
import {DEFAULT_STATE, IState} from "ui/organism/Dashboard/state";
import {arrayToObjectOnKey} from "utils/dataConvertor";
import {Masterpiece} from "../Masterpiece/MasterpieceResource";
import MasterpieceAction from "ui/organism/Masterpiece/action";
import UserAction from "service/User/action";

export default createReducer(DEFAULT_STATE, {
    [MasterpieceAction.FETCH_DATA_DONE](state: IState, payload: Masterpiece[]): IState {
        return {
            ...state,
            masterpieces: arrayToObjectOnKey(payload, "id"),
        };
    },
    [UserAction.SET_LAST_EVENT_MESSAGE](
        state: IState,
        payload: string,
    ): IState {
        return {
            ...state,
            lastEventMessage: payload,
        };
    },

    [UserAction.CLEAR_LAST_EVENT_MESSAGE](state: IState): IState {
        return {
            ...state,
            lastEventMessage: null,
        };
    },
});
