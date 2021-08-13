
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Pages from "./views/Pages";

function App() {
    return (
        <BrowserRouter>
            <Pages/>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
