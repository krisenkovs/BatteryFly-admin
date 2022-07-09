import { Content } from 'pages/MainPage/Content';
import { Header } from 'pages/MainPage/Header';
import { Sidebar } from 'pages/MainPage/Sidebar';
import React, { FC } from 'react';

export const MainPage: FC = () => {
  return (
    <div className="main-page_container">
      <Header />
      <div className="main-page_container_content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
