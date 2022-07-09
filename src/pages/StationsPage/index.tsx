import { EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Table } from 'antd';
import { FilterValue, SorterResult, TablePaginationConfig } from 'antd/lib/table/interface';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { Box } from 'components/Box';
import { Text } from 'components/Text';

import { EditDialog } from './EditDialog';
import { store as editDialogStore } from './EditDialog/store';
import { store } from './store';
import { StationType } from './types';

const enum Actions {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export const StationsPage = observer(() => {
  const { fetchData, destroy, dataPromise, page, size, total, change, deleteItem, deleteItemPromise } = store;

  useEffect(() => {
    fetchData();
    return () => destroy();
  }, [fetchData, destroy]);

  useEffect(() => {
    deleteItemPromise?.error && message.error('This is an error message');
  }, [deleteItemPromise?.error]);

  useEffect(() => {
    if (deleteItemPromise?.fulfilled) {
      message.success('This is an success message');
      fetchData();
    }
  }, [deleteItemPromise?.fulfilled]);

  function handleMenuClick(key: Actions, record: StationType) {
    if (key === Actions.EDIT) {
      editDialogStore.show(record);
    }
    if (key === Actions.DELETE) {
      deleteItem(record?.id);
    }
  }

  function handleModalSuccess() {
    fetchData();
  }

  function handleChangeTable(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<StationType> | SorterResult<StationType>[],
  ) {
    change(pagination?.current, sorter);
  }

  return (
    <>
      <Box flexDirection="column" overflow="hidden" flex={1}>
        <Box paddingLeft="md" paddingRight="md" paddingTop="sm" paddingBottom="sm" className="stations_toolbar">
          <Text size={20} lineHeight={26} weight={700}>
            Зарядные станции
          </Text>

          <Button type="primary" onClick={() => editDialogStore.show()}>
            + Новая станция
          </Button>
        </Box>
        <Box paddingLeft="xss" paddingRight="xss" paddingTop="lg" paddingBottom="lg" flexDirection="column" flex={1}>
          <Table
            rowKey="id"
            loading={dataPromise?.pending}
            pagination={{ total, current: page + 1, pageSize: size }}
            onChange={handleChangeTable}
            dataSource={dataPromise?.value?.content}
            showSorterTooltip={false}
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
                render: (value, record) => (
                  <Dropdown
                    overlay={
                      <Menu
                        onClick={({ key }) => handleMenuClick(key as Actions, record)}
                        items={[
                          {
                            label: 'Редактировать',
                            key: Actions.EDIT,
                            icon: <EditOutlined />,
                          },
                          {
                            label: 'Удалить',
                            key: Actions.DELETE,
                            icon: <DeleteOutlined />,
                          },
                        ]}
                      />
                    }
                  >
                    <Button icon={<EllipsisOutlined />} type="text" />
                  </Dropdown>
                ),
              },
            ]}
          />
        </Box>
      </Box>
      <EditDialog onSuccess={handleModalSuccess} />
    </>
  );
});
