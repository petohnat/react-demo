import { createSelector } from "reselect";
import { NAMESPACE, IState, DEFAULT_STATE } from "./state";

export const dashboardStateSelector = (globalState: unknown): IState => (
    (globalState && (globalState as any))[NAMESPACE] || DEFAULT_STATE
);

export const lastEventMessageSelector = createSelector(
    dashboardStateSelector,
    (dashboard: IState): null | string => dashboard && dashboard.lastEventMessage,
);
