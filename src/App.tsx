import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Pages from "./views/Pages";
import {compose, createStore} from 'redux'
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from 'react-redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    composeEnhancers()
)

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Pages/>
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
