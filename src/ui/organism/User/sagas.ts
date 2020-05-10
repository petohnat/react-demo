import {call, put, select} from "redux-saga/effects";
import UserAction, {loginActionType} from "./action";
import {login} from "app/AppClient";
import {createWatchDaemon} from "sagas/sagaHelpers";
import {localizationLanguageSelector} from "../App/selectors";
import TRANSLATIONS from "../../../config/localizationConfig";

function* loginUser(loginAction: loginActionType) {
    try {
        const loggedUser = yield call(login, loginAction.payload as any);
        yield put(UserAction.userDetailFetchDone({
            user: loggedUser.user,
        }));
    } catch (apiError) {
        const currentLang = yield select(localizationLanguageSelector);
        yield put(UserAction.userSetLastEventMessage(TRANSLATIONS.COMMON.ERROR_MESSAGE.LOGIN[currentLang]));
        console.error(apiError);
    }
}

function* logoutUser() {
    yield put(UserAction.reset());
}

// Running at server
export const init: Array<() => any> = [];

export const daemons: Array<() => any> = [
    createWatchDaemon(UserAction.LOGIN, loginUser),
    createWatchDaemon(UserAction.LOGOUT, logoutUser),
];
