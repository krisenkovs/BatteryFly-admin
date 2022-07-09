import classnames from 'classnames';
import React, { PropsWithChildren, FC, useMemo, CSSProperties } from 'react';

type Sizes = 'xss' | 'xs' | 'sm' | 'md' | 'lg';

type Props = PropsWithChildren<{
  paddingLeft?: Sizes;
  paddingRight?: Sizes;
  paddingTop?: Sizes;
  paddingBottom?: Sizes;
  marginLeft?: Sizes;
  marginRight?: Sizes;
  marginTop?: Sizes;
  marginBottom?: Sizes;
  overflow?: 'hidden' | 'hidden-x';
  flexDirection?: 'row' | 'column';
  disableFlexWrap?: boolean;
  className?: string;
  flex?: number | string;
  style?: CSSProperties;
  fullHeight?: boolean;
}>;

export const Box: FC<Props> = ({
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
  overflow,
  flexDirection = 'row',
  className,
  disableFlexWrap,
  flex,
  style,
  children,
  fullHeight,
}) => {
  const classes = useMemo(() => {
    return classnames('box_flex', {
      [`box_padding_left-${paddingLeft}`]: paddingLeft,
      [`box_padding_right-${paddingRight}`]: paddingRight,
      [`box_padding_top-${paddingTop}`]: paddingTop,
      [`box_padding_bottom-${paddingBottom}`]: paddingBottom,
      [`box_margin_top-${marginTop}`]: marginTop,
      [`box_margin_bottom-${marginBottom}`]: marginBottom,
      [`box_margin_left-${marginLeft}`]: marginLeft,
      [`box_margin_right-${marginRight}`]: marginRight,
      [`box_overflow-${overflow}`]: overflow,
      [`box_flex_direction-${flexDirection}`]: flexDirection,
      [`box_flex_noWrap`]: disableFlexWrap,
      [`box_height_100`]: fullHeight,
      [`${className}`]: className,
    });
  }, [
    paddingBottom,
    paddingTop,
    paddingRight,
    paddingLeft,
    marginLeft,
    marginTop,
    marginRight,
    marginBottom,
    overflow,
    flexDirection,
    disableFlexWrap,
    className,
    fullHeight,
  ]);

  const styles = useMemo(() => {
    const values: CSSProperties = {};

    if (flex !== undefined) {
      values['flex'] = flex;
    }

    return style ? { ...values, ...style } : values;
  }, [flex, style]);

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};
