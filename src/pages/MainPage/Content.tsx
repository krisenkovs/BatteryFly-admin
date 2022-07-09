import { ROUTES } from 'constant';
import { StationsPage } from 'pages/StationsPage';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const Content: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.STATIONS} element={<StationsPage />} />
    </Routes>
  );
};
