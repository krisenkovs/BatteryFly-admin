import { Carousel, Col, Form, Input, InputNumber, message, Modal, Row, Switch } from 'antd';
import { observer } from 'mobx-react';
import { ConnectorField } from 'pages/StationsPage/EditDialog/ConnectorField';
import { QRCodeSVG } from 'qrcode.react';
import React, { FC, useEffect } from 'react';

import { Box } from 'components/Box';
import { Image } from 'components/Image';
import { Text } from 'components/Text';
import { Uploader } from 'components/Uploader';

import { StationType } from '../types';
import { store } from './store';

type Props = {
  onSuccess?: () => void;
};

export const EditDialog: FC<Props> = observer(({ onSuccess }) => {
  const { visible, destroy, close, saveItem, savePromise, data } = store;

  const [form] = Form.useForm<StationType>();

  useEffect(() => {
    if (visible) {
      form.resetFields();
      data && form.setFieldsValue(data);
    } else {
      destroy();
    }
  }, [visible, data]);

  useEffect(() => {
    if (savePromise?.error) {
      message.error('Произошла ошибка');
    }
  }, [savePromise?.error]);

  useEffect(() => {
    if (savePromise?.fulfilled) {
      close();
      message.success('Зарядная станция успешно добавлена');
      onSuccess?.();
    }
  }, [savePromise?.fulfilled]);

  function handleOk() {
    form.validateFields().then((values) => saveItem(values));
  }

  function handleAddFile(id?: string) {
    const images = form.getFieldValue('images') || [];
    form.setFields([{ name: 'images', value: [...images, { imageId: id }] }]);
  }

  function handleDeleteFile(id?: string) {
    if (id) {
      const images = (form.getFieldValue('images') || []) as StationType['images'];
      form.setFields([{ name: 'images', value: images?.filter((item) => item?.imageId !== id) }]);
    }
  }

  return (
    <Modal
      visible={visible}
      onCancel={close}
      onOk={handleOk}
      okText="Сохранить"
      cancelText="Отмена"
      centered
      width={900}
      maskClosable={false}
      title={
        <Text weight={500} size={20} lineHeight={24}>
          {data?.id ? 'Редактирование' : 'Новая зарядная станция'}
        </Text>
      }
      forceRender
      destroyOnClose
    >
      <Box paddingLeft="lg" paddingRight="lg" paddingTop="xs" flexDirection="column">
        <Form layout="vertical" form={form} validateMessages={{ required: 'Заполните поле' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="id" noStyle />
              <Form.Item name="name" label="Наименование" rules={[{ required: true }]}>
                <Input maxLength={255} />
              </Form.Item>
              <Form.Item name="address" label="Адрес" rules={[{ required: true }]}>
                <Input maxLength={255} />
              </Form.Item>
              <Row gutter={32}>
                <Col span={12}>
                  <Form.Item name="maxPower" label="Максимальная мощность" rules={[{ required: true }]}>
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
                  <Form.Item name="rate" label="Курс BYN/kW*h" rules={[{ required: true }]}>
                    <InputNumber precision={2} min={0} max={99999999999} step={0.01} style={{ width: '100%' }} />
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
              <Box flexDirection="column" fullHeight>
                <Row gutter={16}>
                  <Col flex={1}>
                    <Form.Item name="linkQr" label="QR code">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item noStyle shouldUpdate>
                      {({ getFieldValue }) => <QRCodeSVG value={getFieldValue('linkQr')} size={60} />}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="images" noStyle />
                <Form.Item noStyle shouldUpdate>
                  {({ getFieldValue }) => {
                    const images = (getFieldValue('images') || []) as StationType['images'];
                    return (
                      <>
                        <Carousel>
                          {images?.map((image) => (
                            <Image key={image?.imageId} id={image?.imageId} height={160} onDelete={handleDeleteFile} className='stations_form_image'/>
                          ))}
                          <Uploader height={160} onAddFile={handleAddFile} />
                        </Carousel>
                      </>
                    );
                  }}
                </Form.Item>
                <Box flex={1} />
                <Form.Item label="Коннекторы" name="coonectorType">
                  <ConnectorField />
                </Form.Item>
              </Box>
            </Col>
          </Row>
        </Form>
      </Box>
    </Modal>
  );
});
