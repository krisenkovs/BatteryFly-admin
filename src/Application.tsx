import { ConfigProvider } from 'antd';
import { MainPage } from 'pages/MainPage';
import React, { FC, Suspense, useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Application: FC = () => {
  const [isInit, setInit] = useState(false);

  useLayoutEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => setInit(true), 100);
      //setInit(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return isInit ? (
    <BrowserRouter>
      <ConfigProvider renderEmpty={() => null}>
        <Suspense fallback={null}>
          <MainPage />
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  ) : null;
};
