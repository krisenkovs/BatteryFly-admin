import React, { CSSProperties, FC, PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  size?: number;
  lineHeight?: number;
  weight?: number;
  color?: 'primary' | 'secondary' | 'additional' | 'blue';
}>;

export const Text: FC<Props> = ({ color = 'primary', children, size = 14, lineHeight = 16, weight = 400 }) => {
  const styles: CSSProperties = useMemo(() => {
    return {
      fontSize: `${size}px`,
      fontWeight: weight,
      lineHeight: `${lineHeight}px`,
    };
  }, [weight, size, lineHeight]);

  const colorClassName = useMemo(() => {
    return `text_${color}`;
  }, [color]);

  return (
    <div style={styles} className={colorClassName}>
      {children}
    </div>
  );
};
