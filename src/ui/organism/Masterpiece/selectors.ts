import { createSelector, createStructuredSelector } from "reselect";
import {userStateSelector} from "service/User/selectors";
import {dashboardStateSelector} from "ui/organism/Dashboard/selectors";
import {IState, Masterpieces} from "ui/organism/Dashboard/state";
import {IDataProps} from "ui/organism/Masterpiece/MasterpieceUI";
import {localizationLanguageSelector} from "../App/selectors";
import {lastEventMessageSelector} from "../Dashboard/selectors";

export const masterpiecesSelector = createSelector(
    dashboardStateSelector,
    (dashboard: IState): null | Masterpieces => dashboard && dashboard.masterpieces
);

export default createStructuredSelector<unknown, {}, IDataProps>({
    loggedUser: userStateSelector,
    masterpieces: masterpiecesSelector,
    lastEventMessage: lastEventMessageSelector,
    localizationLanguage: localizationLanguageSelector,
});
