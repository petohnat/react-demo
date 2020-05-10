import userAction from "service/User/action";
import {ICallbackProps} from "ui/organism/Login/LoginUI";

export default {
    onUserLogin: (email: string, password: string) => userAction.userLogin({
        email,
        password,
    }),
    onClearLastEventMessage: () => userAction.userClearLastEventMessage(),
} as ICallbackProps;
