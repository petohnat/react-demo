import {Masterpiece} from "ui/organism/Masterpiece/MasterpieceResource";

export const NAMESPACE = "dashboard";

export type Masterpieces = {
    [key: string]: Masterpiece
}

export interface IState {
    masterpieces: null | Masterpieces;
    lastEventMessage: null | string;
}

export const DEFAULT_STATE: IState = {
    masterpieces: null,
    lastEventMessage: null,
};
