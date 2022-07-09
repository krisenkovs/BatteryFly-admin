import React, { FC, PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  size: number;
}>;

export const Icon: FC<Props> = ({ size, children }) => {
  const styles = useMemo(() => {
    return {
      fontSize: `${size}px`,
    };
  }, [size]);

  return <div style={styles}>{children}</div>;
};
