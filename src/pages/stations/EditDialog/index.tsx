import React, { FC, useEffect } from 'react'
import { Carousel, Col, Form, Input, InputNumber, message, Modal, Row, Switch } from 'antd';
import { observer } from 'mobx-react';
import { store } from './store';
import { QRCodeSVG } from 'qrcode.react';
import { Text } from 'components/Text';
import { StationType } from '../types';
import { Box } from 'components/Box';
import Checkbox from 'antd/lib/checkbox/Checkbox';

type Props = {
  onSuccess?: () => void;
};

export const EditDialog: FC<Props> = observer(({ onSuccess }) => {
  const { visible, destroy, close, createItem, savePromise } = store;

  const [form] = Form.useForm<StationType>();

  useEffect(() => {
    return () => destroy();
  }, [destroy]);

  useEffect(() => {
    if (savePromise?.error) {
      message.error('Произошла ошибка');
    }
    if (savePromise?.fulfilled) {
      message.success('Зарядная станция успешно добавлена');
      onSuccess?.();
    }
  }, [savePromise?.error, savePromise?.fulfilled, onSuccess]);

  function handleOk() {
    form.validateFields().then((values) => createItem(values));
  }

  return (
    <Modal
      visible={visible}
      onCancel={close}
      onOk={handleOk}
      okText="Создать"
      cancelText="Отмена"
      centered
      width={800}
      maskClosable={false}
      title={
        <Text weight={500} size={20} lineHeight={24}>
          Новая зарядная станция
        </Text>
      }
      forceRender
      destroyOnClose
    >
      <Box pL={20} pR={20} pT={8} flexDirection="column">
        <Form layout="vertical" form={form} validateMessages={{ required: 'Заполните поле' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Наименование" rules={[{ required: true }]}>
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item name="address" label="Адрес" rules={[{ required: true }]}>
                <Input maxLength={255} />
              </Form.Item>
              <Row gutter={32}>
                <Col span={12}>
                  <Form.Item
                    name="maxPower"
                    label="Максимальная мощность"
                    rules={[{ required: true }]}
                  >
                    <Input maxLength={255} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="isFastCharge" label="Быстрая зарядка" valuePropName="checked">
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col span={12}>
                  <Form.Item name="rate" label="Курс BYN/kW*h" rules={[{ required: true }]} >
                    <InputNumber precision={2} min={0} max={99999999999} step={0.01} style={{width:'100%'}}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="availability" label="Доступность" valuePropName="checked">
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="description" label="Описание" rules={[{ required: true }]}>
                <Input.TextArea maxLength={4000} rows={3} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Box flexDirection="column">
                <Row gutter={16}>
                  <Col span={12}>
                    <Carousel>
                      <div />
                      <div />
                      <div />
                    </Carousel>
                  </Col>
                  <Col span={12}>
                    <Form.Item noStyle shouldUpdate>
                      {({ getFieldValue }) => <QRCodeSVG value={getFieldValue('linkQr')} />}
                    </Form.Item>
                  </Col>
                </Row>
                <Box flex={1} />
                <Form.Item label="Коннекторы" valuePropName="checked">
                  <Checkbox />
                </Form.Item>
              </Box>
            </Col>
          </Row>
        </Form>
      </Box>
    </Modal>
  );
});
