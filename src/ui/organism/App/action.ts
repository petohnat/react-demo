import {FluxStandardAction} from "flux-standard-action";

const Action = {
    INIT_APP_VERSION: "application.INIT_APP_VERSION",
    SET_APP_LANGUAGE: "application.SET_APP_LANGUAGE",

    initAppVersion(version: string): FluxStandardAction<string, string> {
        return {
            payload: version,
            type: Action.INIT_APP_VERSION,
        };
    },

    setAppLanguage(language: string): FluxStandardAction<string, string> {
        return {
            payload: language,
            type: Action.SET_APP_LANGUAGE,
        };
    },
};

export default Action;