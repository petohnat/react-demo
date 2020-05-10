export const NAMESPACE = "application";

export interface IState {
    appVersion: string;
    localizationLanguage: string;
}

export const DEFAULT_STATE: IState = {
    appVersion: "1.0",
    localizationLanguage: "",
};
