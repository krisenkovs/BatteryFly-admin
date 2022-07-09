import { Col, Row, Switch } from 'antd';
import { Connector1 } from 'icons/Connector1';
import { Connector2 } from 'icons/Connector2';
import { Connector3 } from 'icons/Connector3';
import { Connector4 } from 'icons/Connector4';
import { StationType } from 'pages/StationsPage/types';
import React, { FC } from 'react';

import { Box } from 'components/Box';
import { Icon } from 'components/Icon';

type Props = {
  value?: StationType['coonectorType'];
  onChange?: (value: StationType['coonectorType']) => void;
};

export const ConnectorField: FC<Props> = ({ value, onChange }) => {
  function handleChange(key: string, checked: boolean) {
    onChange?.({ ...value, [key]: checked });
  }

  return (
    <Row justify="space-between">
      <Col>
        <Box flexDirection="column">
          <Icon size={40}>
            <Connector1 />
          </Icon>

          <Switch checked={!!value?.connector1} onChange={(checked) => handleChange('connector1', checked)} />
        </Box>
      </Col>
      <Col>
        <Box flexDirection="column">
          <Icon size={40}>
            <Connector2 />
          </Icon>

          <Switch checked={!!value?.connector2} onChange={(checked) => handleChange('connector2', checked)} />
        </Box>
      </Col>
      <Col>
        <Box flexDirection="column">
          <Icon size={40}>
            <Connector3 />
          </Icon>

          <Switch checked={!!value?.connector3} onChange={(checked) => handleChange('connector3', checked)} />
        </Box>
      </Col>
      <Col>
        <Box flexDirection="column">
          <Icon size={40}>
            <Connector4 />
          </Icon>

          <Switch checked={!!value?.connector4} onChange={(checked) => handleChange('connector4', checked)} />
        </Box>
      </Col>
    </Row>
  );
};
