import {call, put} from "redux-saga/effects";
import {getMasterpieces} from "app/AppClient";
import {createWatchDaemon} from "sagas/sagaHelpers";
import MasterpieceAction from "ui/organism/Masterpiece/action";
import {Masterpiece} from "ui/organism/Masterpiece/MasterpieceResource";


function* fetchMasterpieces() {
    try {
        const masterpieces: Masterpiece[] = yield call(getMasterpieces);

        yield put(MasterpieceAction.fetchDataDone(masterpieces));
    } catch (apiError) {
        console.error(apiError);
    }
}

export const init: Array<() => any> = [];
export const daemons: Array<() => any> = [
    createWatchDaemon(MasterpieceAction.FETCH_DATA, fetchMasterpieces),
];
