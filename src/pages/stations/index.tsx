import { EyeOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Table } from 'antd';
import { FilterValue, SorterResult, TablePaginationConfig } from 'antd/lib/table/interface';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { EditDialog } from './EditDialog';
import { store as editDialogStore } from './EditDialog/store';
import { store } from './store';
import { StationType } from './types';

export const Stations = observer(() => {
  const { fetchData, destroy, dataPromise, page, size, total, change } = store;

  useEffect(() => {
    fetchData();
    return () => destroy();
  }, [fetchData, destroy]);

  function handleMenuClick() {
    editDialogStore.show();
  }

  function handleModalSuccess() {
    fetchData();
    editDialogStore.close();
  }

  function handleChangeTable(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<StationType> | SorterResult<StationType>[],
  ) {
    change(pagination?.current, sorter);
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
    <>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
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
          <span style={{ flex: '1', fontSize: '20px', fontWeight: 700, lineHeight: '25px' }}>Зарядные станции</span>
          <Button type="primary" onClick={editDialogStore.show} size="large">
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
            rowKey="id"
            loading={dataPromise?.pending}
            pagination={{ total, current: page + 1, pageSize: size }}
            onChange={handleChangeTable}
            dataSource={dataPromise?.value?.content}
            columns={[
              {
                title: '#',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
              },
              {
                title: 'Наименование',
                dataIndex: 'name',
                key: 'name',
                sorter: true,
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
      </div>
      <EditDialog onSuccess={handleModalSuccess} />
    </>
  );
});
