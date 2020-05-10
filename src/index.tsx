import * as serviceWorker from './serviceWorker';
import ClientRenderer from './app/clientRenderer';
import './styles/main.scss';

// Run init sagas at server
// const initSagaPromises = [];
// for (const saga of sagas.init) {
//     initSagaPromises.push(sagaMiddleware.run(saga).toPromise());
// }

// 
// TODO: Create client renderer, init daemons and so on
try {
    const initialReduxStoreState = {};
    const renderer = new ClientRenderer(initialReduxStoreState);

    renderer.initialAppRender();

    // TODO: Here just try to render clientRenderer load clientStorage, init cookies and so on

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
} catch(error) {
    console.error('Failed to init application');
}
