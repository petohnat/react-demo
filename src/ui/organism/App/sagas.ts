import {all, fork, put} from 'redux-saga/effects';
import Action from "ui/organism/App/action";

function* rootSaga() {
    yield all([
        fork(loadLocalizationSettings),
    ]);
}

function* loadLocalizationSettings() {
    if (!window) {
        return;
    }

    const languages = window.navigator.languages || window.navigator.language;
    if (!languages || !languages.length) {
        return;
    }

    const browserLanguage = languages[0].toLowerCase();
    const selectedLang = getSupportedLanguage(browserLanguage);

    yield put(Action.setAppLanguage(selectedLang));
}

function getSupportedLanguage(language: string): string {
    switch (true) {
        case language.includes("sk"):
            return "sk";
        case language.includes("en"):
            return "en";
        default:
            return "sk";
    }
}

export const init: Array<() => any> = [];
export const daemons: Array<() => any> = [
    rootSaga,
];