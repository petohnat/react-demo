import { takeLeading } from "redux-saga/effects";

export function createWatchDaemon(actionType: string, patternOrSaga: (...args: any[]) => any, ...args: any[]) {
    return function* (): Object {
        yield takeLeading(actionType, patternOrSaga, ...args);
    }
}
