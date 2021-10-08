import React from 'react';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './views/Pages';

function App() {
  return (
    <ConfigProvider locale={plPL}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
