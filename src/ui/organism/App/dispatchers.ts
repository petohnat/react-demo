import appAction from "ui/organism/App/action";
import userAction from "ui/organism/User/action";
import { ICallbackProps } from "ui/organism/App/AppUI";

export default {
    onUserLogout: () => userAction.userLogout(),
    onAppLanguageChange: (lang: string) => appAction.setAppLanguage(lang),
} as ICallbackProps;
