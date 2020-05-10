import * as applicationSagas from "ui/organism/App/sagas";
import * as dashboardSagas from "ui/organism/Dashboard/sagas";
import * as userSagas from "service/User/sagas";

interface ISagaCollection {
    init: Array<() => any>,
    daemons: Array<() => any>,
}

const SAGA_COLLECTIONS: Array<ISagaCollection> = [
    applicationSagas,
    dashboardSagas,
    userSagas,
];

export const init = combineSagas(SAGA_COLLECTIONS, sagaCollection => sagaCollection.init);
export const deamons = combineSagas(SAGA_COLLECTIONS, sagaCollection => sagaCollection.daemons);

function combineSagas(sagaCollections: Array<ISagaCollection>, sagaSelector: (sagaCollection: ISagaCollection) => any): Array<any> {
    return [].concat(
        ...sagaCollections.map(sagaCollection => sagaSelector(sagaCollection)),
    );
}
