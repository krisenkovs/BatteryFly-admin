import { ConfigProvider } from 'antd';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'styles/index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ConfigProvider renderEmpty={() => null}>
      <Suspense fallback={null}>
        <MainPage />
      </Suspense>
    </ConfigProvider>
  </BrowserRouter>,
);
