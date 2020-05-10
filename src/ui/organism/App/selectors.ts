import {createSelector, createStructuredSelector} from "reselect";
import {IDataProps, IExternalProps} from "./AppUI";
import {NAMESPACE, IState, DEFAULT_STATE} from "./state";
import {userStateSelector} from "../User/selectors";

// Used in clientRenderer
export const stateSelector = (globalState: unknown): IState => (
    (globalState && (globalState as any))[NAMESPACE] || DEFAULT_STATE
);

const applicationVersionSelector = createSelector(
    stateSelector,
    (state: IState): string => state.appVersion,
);

export const localizationLanguageSelector = createSelector(
    stateSelector,
    (state: IState): string => state.localizationLanguage,
);

export default createStructuredSelector<unknown, IExternalProps, IDataProps>({
    applicationVersion: applicationVersionSelector,
    user: userStateSelector,
    localizationLanguage: localizationLanguageSelector,
});
