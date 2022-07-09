import { Logo } from 'icons/Logo';
import React, { FC } from 'react';

import { Box } from 'components/Box';

export const Header: FC = () => {
  return (
    <Box paddingLeft="lg" paddingTop="xs" paddingBottom="xs" className="main-page_container_header">
      <Logo />
    </Box>
  );
};
