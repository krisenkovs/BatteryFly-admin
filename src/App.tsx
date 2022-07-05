import { Tooltip } from 'antd';
import { Station } from "icons/Station";
import { Logo } from "icons/Logo";
import { Stations } from "pages/stations";
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from "constant";
import { Box } from "components/Box";
import React from 'react';

function App() {
  return (
    <Box flexDirection="column" height="100%" width="100%">
      <Box
        width="100%"
        height="56px"
        pL={22}
        pT={8}
        pB={8}
        style={{ background: 'rgba(0, 0, 0, 0.0001)', boxShadow: 'inset 0px -1px 0px #E4E7EB' }}
      >
        <Logo />
      </Box>
      <Box flex={1}>
        <Box
          width="81px"
          position="absolute"
          pT={16}
          flexDirection="column"
          aI="center"
          style={{
            borderRight: '1px solid #9E9E9E',
            left: 0,
            top: 0,
            bottom: 0,
            gap: '30px',
          }}
        >
          <Tooltip title="station">
            <div style={{ cursor: 'pointer' }}>
              <Station />
            </div>
          </Tooltip>
        </Box>
        <Box
          position="absolute"
          style={{
            display: 'flex',
            left: '81px',
            top: '0',
            bottom: 0,
            right: 0,
          }}
        >
          <Routes>
            <Route path={ROUTES.STATIONS} element={<Stations />} />
            <Route index element={<Stations />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
