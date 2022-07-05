import React from 'react'
import { CSSProperties, FC, PropsWithChildren, useMemo } from 'react';

type Props = PropsWithChildren<{
  pT?: number;
  pB?: number;
  pL?: number;
  pR?: number;
  flexDirection?: CSSProperties['flexDirection'];
  aI?: CSSProperties['alignItems'];
  jC?: CSSProperties['justifyContent'];
  flex?: CSSProperties['flex'];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  style?: CSSProperties;
  position?: CSSProperties['position'];
}>;

export const Box: FC<Props> = ({
  children,
  height,
  width,
  flex,
  pT,
  pB,
  pL,
  pR,
  flexDirection,
  aI,
  jC,
  style,
  position = 'relative',
}) => {
  const styles: CSSProperties = useMemo(() => {
    const values: CSSProperties = { display: 'flex' };

    if (pT !== undefined) {
      values['paddingTop'] = `${pT}px`;
    }

    if (pB !== undefined) {
      values['paddingBottom'] = `${pB}px`;
    }

    if (pL !== undefined) {
      values['paddingLeft'] = `${pL}px`;
    }

    if (pR !== undefined) {
      values['paddingRight'] = `${pR}px`;
    }

    if (flexDirection !== undefined) {
      values['flexDirection'] = flexDirection;
    }

    if (aI !== undefined) {
      values['alignItems'] = aI;
    }

    if (jC !== undefined) {
      values['justifyContent'] = jC;
    }

    if (flex !== undefined) {
      values['flex'] = flex;
    }

    if (height !== undefined) {
      values['height'] = height;
    }

    if (width !== undefined) {
      values['width'] = width;
    }

    if (position !== undefined) {
      values['position'] = position;
    }

    return { ...values, ...style };
  }, [pT, pB, pR, pL, flexDirection, aI, jC, flex, height, width, style, position]);

  return <div style={styles}>{children}</div>;
};
