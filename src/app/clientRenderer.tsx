import React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from '../reducers';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import * as sagas from '../sagas';
import Action from '../ui/organism/App/action';
import App from '../ui/organism/App/App';
import {createBrowserHistory, History} from "history";

export default class ClientRenderer {
    private appContainer: null | HTMLElement = null;
    private initialRender: boolean;
    private sagaMiddleware: SagaMiddleware;
    private store: Store<any>;
    private history: History;

    // Where to init state of app
    constructor(initialReduxStoreState: any) {
        this.appContainer = document.getElementById('root');
        if (!this.appContainer) {
            throw new Error("App container element not found! Something is wrong in your HTML");
        }

        this.initialRender = false;

        const sagaMiddleware = createSagaMiddleware({
            sagaMonitor: (window as any)['__SAGA_MONITOR_EXTENSION__'] // Need to be installed Chrome extension https://github.com/abettadapur/redux-saga-devtools-extension
        });
        const composeEnhancers =  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
        this.sagaMiddleware = sagaMiddleware;
        this.store = createStore(
            rootReducer,
            initialReduxStoreState,
            composeEnhancers(
                applyMiddleware(sagaMiddleware),
            )
        );
        this.history = createBrowserHistory();

        // Run saga Daemons
        for (const saga of sagas.deamons) {
            sagaMiddleware.run(saga);
        }

        // Set app version
        this.store.dispatch(Action.initAppVersion('1.1'));

        // Here you can do some extra configuration or dispatch actions
    }

    public initialAppRender() {
        if (this.initialRender) {
            console.error("You can not call init render twice!");
        }

        this.reactDOMRender();
        this.initialRender = true;
    }

    public reactDOMRender() {
        const rootElement = this.appContainer;

        const appUI = (
            <App store={this.store} history={this.history} />
        );

        ReactDOM.render(appUI, rootElement);
    }
}
