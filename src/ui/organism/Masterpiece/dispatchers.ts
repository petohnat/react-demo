import userAction from "service/User/action";
import masterpieceAction from "ui/organism/Masterpiece/action";
import {ICallbackProps} from "ui/organism/Masterpiece/MasterpieceUI";

export default {
    onUserLogout: () => userAction.userLogout(),
    onFetchMasterpieces: () => masterpieceAction.fetchData(),
    onClearLastEventMessage: () => userAction.userClearLastEventMessage(),
} as ICallbackProps;
