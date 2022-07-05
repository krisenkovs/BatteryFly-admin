import React, { CSSProperties, FC, PropsWithChildren, useMemo } from 'react'

type Props = PropsWithChildren<{
  size?: number;
  lineHeight?: number;
  weight?: number;
}>;

export const Text: FC<Props> = ({ children, size = 14, lineHeight = 16, weight = 400 }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      fontSize: `${size}px`,
      fontWeight: weight,
      lineHeight: `${lineHeight}px`,
    };
  }, [weight, size, lineHeight]);

  return <div style={styles}>{children}</div>;
};
