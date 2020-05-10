import {ErrorFluxStandardAction, FluxStandardAction} from "flux-standard-action";

export type StrictFluxStandartAction<P, M = void> = FluxStandardAction<P, M> & {payload: P};
