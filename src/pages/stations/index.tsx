import { Button, Dropdown, Menu, Table } from 'antd';
import { useEffect } from 'react';
import { store } from './store';
import { store as editDialogStore } from './EditDialog/store';
import { observer } from 'mobx-react';
import { EyeOutlined, EllipsisOutlined } from '@ant-design/icons';
import { EditDialog } from './EditDialog';

export const Stations = observer(() => {
  const { fetchData, destroy, dataPromise } = store;

  useEffect(() => {
    fetchData();
    return () => destroy();
  }, [fetchData, destroy]);

  function handleMenuClick() {
    editDialogStore.show();
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Просмотр',
          key: '1',
          icon: <EyeOutlined />,
        },
      ]}
    />
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div
        style={{
          display: 'flex',
          paddingLeft: '18px',
          paddingRight: '18px',
          paddingTop: '11px',
          paddingBottom: '11px',
          alignItems: 'center',
          borderBottom: '1px solid #C2CDDB',
        }}
      >
        <span style={{ flex: '1', fontSize: '20px', fontWeight: 700, lineHeight: '25px' }}>
          Зарядные станции
        </span>
        <Button type="primary" onClick={editDialogStore.show}>
          + Новая станция
        </Button>
      </div>
      <div
        style={{
          paddingTop: '20px',
          paddingLeft: '4px',
          paddingRight: '4px',
          paddingBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Table
          loading={dataPromise?.pending}
          dataSource={dataPromise?.value?.content}
          columns={[
            {
              title: '#',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Наименование',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Макс. мощность',
              dataIndex: 'maxPower',
              key: 'maxPower',
            },
            {
              title: 'Быстрая зарядка',
              dataIndex: 'isFastCharge',
              key: 'isFastCharge',
              render: (value) => (value ? 'Да' : 'Нет'),
            },
            {
              title: 'Коннекторы',
              dataIndex: 'coonectorType',
              key: 'coonectorType',
            },
            {
              title: 'Доступность',
              dataIndex: 'availability',
              key: 'availability',
              render: (value) => (value ? 'Да' : 'Нет'),
            },
            {
              key: 'actions',
              align: 'right',
              render: () => (
                <Dropdown overlay={menu}>
                  <Button icon={<EllipsisOutlined />} type="text" />
                </Dropdown>
              ),
            },
          ]}
        />
      </div>
      <EditDialog />
    </div>
  );
});
