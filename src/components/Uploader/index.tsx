import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import { observer } from 'mobx-react';
import React, { FC, useEffect, useState } from 'react';

import { Icon } from 'components/Icon';
import { Text } from 'components/Text';
import { Store } from 'components/Uploader/store';

type Props = {
  height?: number;
  onAddFile?: (id?: string) => void;
};

export const Uploader: FC<Props> = observer(({ height, onAddFile }) => {
  const [store] = useState(new Store());

  useEffect(() => {
    if (store.savePromise?.fulfilled) {
      onAddFile?.(store.savePromise?.value);
    }
  }, [store.savePromise?.fulfilled]);

  function handleChange(file: File) {
    store.save(file);
    return false;
  }

  return (
    <Dragger height={height} beforeUpload={handleChange} showUploadList={false} multiple={false}>
      <Icon size={32}>
        <InboxOutlined />
      </Icon>
      <Text size={18} weight={500} lineHeight={24}>
        Click or drag file to this area to upload
      </Text>
    </Dragger>
  );
});
