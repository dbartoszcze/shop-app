import React from 'react';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './views/Pages';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <ConfigProvider locale={plPL}>
      <Provider store={store}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
