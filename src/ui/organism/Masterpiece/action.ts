import {FluxStandardAction} from 'flux-standard-action';
import { Masterpiece } from './MasterpieceResource';

const Action = {
    FETCH_DATA: "masterpiece.FETCH_DATA",
    FETCH_DATA_DONE: "masterpiece.FETCH_DATA_DONE",

    fetchData(): FluxStandardAction<string>  {
        const action: any = {
            type: Action.FETCH_DATA,
        };
        
        return action as FluxStandardAction<string>;
    },

    fetchDataDone(payload: Masterpiece[]): FluxStandardAction<string, Masterpiece[]>  {
        const action: any = {
            type: Action.FETCH_DATA_DONE,
            payload,
        };
        
        return action as FluxStandardAction<string, Masterpiece[]>;
    },
};

export default Action;
