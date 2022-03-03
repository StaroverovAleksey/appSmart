import React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import { Provider } from 'react-redux';
import reducer from './store';
import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import thunk from 'redux-thunk';
import 'normalize.css';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

const store = createStore(reducer, composedEnhancer);

const init = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </Provider>,
        window.document.querySelector('#app'),
    );
};
init();
