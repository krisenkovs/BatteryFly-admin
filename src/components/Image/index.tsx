import { DeleteOutlined, EyeFilled } from '@ant-design/icons';
import { Col, Image as AntImage, Row } from 'antd';
import classnames from 'classnames';
import { API } from 'constant';
import React, { CSSProperties, FC, useMemo, useState } from 'react';

import { Icon } from '../Icon';

type Props = {
  id?: string;
  height?: number;
  width?: number;
  className?: string;
  onDelete?: (id?: string) => void;
  objectFit?: CSSProperties['objectFit'];
};

export const Image: FC<Props> = ({ height = 200, width, className, id, onDelete, objectFit = 'cover' }: Props) => {
  const [visible, setVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const style = useMemo(() => {
    return {
      height: height ? `${height}px` : 'auto',
      width: width ? `${width}px` : 'auto',
    } as CSSProperties;
  }, [width, height]);

  const imageStyle = useMemo(() => {
    return {
      width: '100%',
      height: '100%',
      objectFit,
    } as CSSProperties;
  }, [objectFit]);

  function handleMouseEnter() {
    setShowOverlay(true);
  }

  function handleMouseLeave() {
    setShowOverlay(false);
  }

  function handlePreview() {
    setVisible(true);
  }

  function handleDelete() {
    onDelete?.(id);
  }

  return (
    <div
      className={classnames('image_container', className)}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <>
        {showOverlay && (
          <>
            <div className="image_overlay" />
            <div className="image_content">
              <Row gutter={16} justify="center" align="middle" wrap={false}>
                <Col>
                  <div onClick={handlePreview} className="image_content_button">
                    <Icon size={24} color="white">
                      <EyeFilled />
                    </Icon>
                  </div>
                </Col>
                <Col>
                  <div onClick={handleDelete} className="image_content_button">
                    <Icon size={24} color="white">
                      <DeleteOutlined />
                    </Icon>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        )}
        <AntImage preview={false} src={`http://174.138.106.191:8080${API.IMAGE}/${id}` || ''} style={imageStyle} />
        <div className="image_preview">
          <AntImage.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
            <AntImage src={`http://174.138.106.191:8080${API.IMAGE}/${id}` || ''} />
          </AntImage.PreviewGroup>
        </div>
      </>
    </div>
  );
};
