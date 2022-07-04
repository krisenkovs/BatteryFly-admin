import { Modal } from 'antd';
import { observer } from 'mobx-react';
import { store } from './store';
import { useEffect } from 'react';

export const EditDialog = observer(() => {
  const { visible, destroy, close } = store;

  useEffect(() => {
    return () => destroy();
  }, []);

  return <Modal visible={visible} onCancel={close} title="Новая зарядная станция" forceRender />;
});
