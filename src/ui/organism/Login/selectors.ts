import {createStructuredSelector} from 'reselect';
import {IDataProps, IExternalProps} from "ui/organism/Login/LoginUI";
import {userStateSelector} from "ui/organism/User/selectors";
import {localizationLanguageSelector} from "../App/selectors";
import {lastEventMessageSelector} from "../Dashboard/selectors";

export default createStructuredSelector<unknown, IExternalProps, IDataProps>({
    user: userStateSelector,
    localizationLanguage: localizationLanguageSelector,
    lastEventMessage: lastEventMessageSelector,
});
