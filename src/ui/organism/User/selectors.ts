import {NAMESPACE, IState, DEFAULT_STATE} from "ui/organism/User/state";

// Used in clientRenderer
export const userStateSelector = (globalState: unknown): IState => (
    (globalState && (globalState as any))[NAMESPACE] || DEFAULT_STATE
);
