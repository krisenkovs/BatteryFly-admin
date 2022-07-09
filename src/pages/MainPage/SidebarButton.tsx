import { Tooltip } from 'antd';
import classnames from 'classnames';
import React, { FC, ReactElement } from 'react';

type Props = {
  icon?: ReactElement;
  active?: boolean;
  tooltip: string;
  onClick?: () => void;
};

export const SidebarButton: FC<Props> = ({ icon, onClick, active, tooltip }) => {
  return (
    <Tooltip title={tooltip} placement="right">
      <div
        className={classnames('main-page_sidebar_button', active && 'main-page_sidebar_button-active')}
        onClick={() => onClick?.()}
      >
        {icon}
      </div>
    </Tooltip>
  );
};
