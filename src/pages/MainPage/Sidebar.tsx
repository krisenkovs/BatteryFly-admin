import { ThunderboltOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import classnames from 'classnames';
import { ROUTES } from 'constant';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selected, setSelected] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const path = location.pathname.split('/')[1] || '';

    if (path) {
      setSelected(path);
    } else {
      navigate(ROUTES.STATIONS);
    }
  }, [pathname]);

  /*function toggleCollapse() {
    setCollapsed(!collapsed);
  }*/
  function handleItemClick() {
    setCollapsed(true);
  }

  return (
    <Sider
      theme="light"
      collapsed={collapsed}
      width={200}
      collapsedWidth={68}
      className={classnames('main-page_container_menu', !collapsed && 'main-page_container_menu-expanded')}
    >
      <Menu className="main-page_container_menu__tree" selectedKeys={[selected]}>
        <Menu.Item key={'stations'} icon={<ThunderboltOutlined />}>
          <Link to={ROUTES.STATIONS} onClick={handleItemClick}>
            Зарядные станции
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
