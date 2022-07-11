import React, { FC, PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  size: number;
  color?:'primary'
    | 'secondary'
    | 'additional'
    | 'blue'
  |'white'
}>;

export const Icon: FC<Props> = ({ size, color= 'primary', children }) => {
  const styles = useMemo(() => {
    return {
      fontSize: `${size}px`,
    };
  }, [size]);

  const colorClassName = useMemo(() => {
    return `icon_${color}`;
  }, [color]);

  return <div style={styles} className={colorClassName}>{children}</div>;
};
